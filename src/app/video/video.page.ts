import { Component, OnInit } from '@angular/core';
import { ReportingService } from '../Services/reporting.service';
import Report from '../Models/report';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  reportedItems: Report[] = [];

  constructor(private reportingService: ReportingService, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.loadReportedItems();
  }

  loadReportedItems() {
    this.reportingService.getReports().subscribe((data) => {
      // Filter and map video items
      this.reportedItems = data
        .map((item) => {
          const id = item.payload.doc.id;
          const report = item.payload.doc.data() as Report;
          return { id, ...report };
        })
        .filter((item) => item.fileType && item.fileType.startsWith('video'));
    });
  }
}
