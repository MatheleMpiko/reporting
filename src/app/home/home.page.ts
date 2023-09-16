import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { ReportingService } from '../Services/reporting.service';
import Report from '../Models/report';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedFile: File | null = null;
  uploadProgress = 0;
  uploadSuccess = false;
  uploadError = false;
  uploadErrorMessage = '';

  location: string = ''; // Add location property
  description: string = ''; // Add description property

  constructor(private storage: AngularFireStorage,
    private reportingService: ReportingService,
    ) { }

  ngOnInit() {
  }

  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) {
      return;
    }
    const filePath = `uploads/${Date.now()}_${this.selectedFile.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, this.selectedFile);

    uploadTask.percentageChanges().subscribe((percentage) => {
      this.uploadProgress = percentage || 0;
    });

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(
            (downloadURL) => {
              this.uploadSuccess = true;
              // You can do something with the downloadURL here, like storing it in your database.
              console.log(downloadURL);

              const report: Report = {
                location: this.location,
                description: this.description,
                fileUrl: downloadURL, // Save the downloadURL
              };
                 // Use the ReportingService to save the downloadURL to Firestore
                 this.reportingService.addReport(report)
                 .then(() => {
                   console.log('Download URL saved to Firestore:', downloadURL);
                 })
                 .catch((error) => {
                   console.error('Error saving download URL to Firestore:', error);
                 });
            },
            (error) => {
              this.uploadError = true;
              console.log(error);
              this.uploadErrorMessage = 'Failed to get download URL';
            }
          );
        })
      )
      .subscribe();
  }

}
