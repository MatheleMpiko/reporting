import { Component, OnInit } from '@angular/core';
import { ReportingService } from '../Services/reporting.service';
import Report from '../Models/report';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
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
