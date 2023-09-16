import { Component, OnInit } from '@angular/core';
import { ReportingService } from '../Services/reporting.service';
import Report from '../Models/report';

@Component({
  selector: 'app-reported-item',
  templateUrl: './reported-item.page.html',
  styleUrls: ['./reported-item.page.scss'],
})
export class ReportedItemPage implements OnInit {
  reportedItems: Report[] = [];

  constructor(private reportingService: ReportingService) {}

  ngOnInit() {
    this.loadReportedItems();
  }

  loadReportedItems() {
    this.reportingService.getReports().subscribe((data) => {
      this.reportedItems = data.map((item) => {
        const id = item.payload.doc.id;
        const report = item.payload.doc.data() as Report;
        return { id, ...report };
      });
    });
  }
}
