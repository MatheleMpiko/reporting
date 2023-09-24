import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ReportData } from '../Models/report-data';
import { ReporttextService } from '../Services/reporttext.service';
import { FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-text-reports',
  templateUrl: './text-reports.page.html',
  styleUrls: ['./text-reports.page.scss'],
})
export class TextReportsPage implements OnInit {

  @Input() booking?: ReportData;
  reportList! : any[];
  reportData: ReportData = {
    report: '',
    category: '',
    date: new Date,
    location: '',
  };
  message = '';

  constructor(private reportService: ReporttextService, public formBuilder: FormBuilder, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.message='';

    this.reportService.read_reports().subscribe((data: any) => {
      this.reportList = data.map((e: any) => {
        return {
          report: e.payload.doc.data()['report'],
          category: e.payload.doc.data()['category'],
          date: e.payload.doc.data()['date'],
          location: e.payload.doc.data()['location']
        };
      })
      console.log(this.reportList);
    });
  }


}
