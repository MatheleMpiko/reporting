import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ReportData } from '../Models/report-data';
import { ReporttextService } from '../Services/reporttext.service';
import { FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { log } from 'console';

@Component({
  selector: 'app-text-reports',
  templateUrl: './text-reports.page.html',
  styleUrls: ['./text-reports.page.scss'],
})
export class TextReportsPage implements OnInit {

  @Input() booking?: ReportData;
  term: any;
  id: any;
  reportList: any[] = [
    // Your initial list of items
  ];
  reportData: ReportData = {
    report: '',
    category: '',
    date: new Date,
    location: '',
    approved: false
  };
  message = '';
  filteredList: any[];

  constructor(private reportService: ReporttextService, public formBuilder: FormBuilder, private firestore: AngularFirestore) {
    this.filteredList = this.reportList;
  }

  ngOnInit() {
    this.message = '';

    this.reportService.read_reports().subscribe((data: any) => {
      this.reportList = data.map((e: any) => {
        const id = e.payload.doc.id;
        return {
          report: e.payload.doc.data()['report'],
          category: e.payload.doc.data()['category'],
          date: e.payload.doc.data()['date'],
          location: e.payload.doc.data()['location'],
          approved: e.payload.doc.data()['approved'],
          id,
        };
      })
      console.log(this.reportList);
    });
  }

  updateField(docId: any, field: string, value : boolean){
    this.firestore.collection('Report').doc(docId).update({
      [field] : value,
    }).then(() => {
      console.log('Approved');
      window.alert('Incident report Approved')
    }).catch((error) => {
      console.error('Error when Approving');
    })
   }

  onSearch(item: any) {
    this.filteredList = this.reportList.filter(item => {
      return item.report.includes(this.term) || item.date.includes(this.term) || item.category.includes(this.term) || item.location.includes(this.term);
    });
  }
}
