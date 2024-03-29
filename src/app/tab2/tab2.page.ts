import { Component, OnInit } from '@angular/core';
import { ReportingService } from '../Services/reporting.service';
import Report from '../Models/report';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  reportedItems: Report[] = [];

  constructor(private reportingService: ReportingService, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.loadReportedItems();
  }

  loadReportedItems() {
    this.reportingService.getReports().subscribe((data) => {
      // Filter and map image items
      this.reportedItems = data
        .map((item) => {
          const id = item.payload.doc.id;
          const report = item.payload.doc.data() as Report;
          return { id, ...report };
        })
        .filter((item) => item.fileType && item.fileType.startsWith('image'));
    });
  }
}