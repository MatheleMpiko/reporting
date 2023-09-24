import { Component, OnInit } from '@angular/core';
import { ReportData } from '../Models/report-data';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ReporttextService } from '../Services/reporttext.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  reportData!: ReportData;
  reportForm!: FormGroup;

  constructor(private reportService: ReporttextService,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.reportForm = this.formBuilder.group({
      report: ['', [Validators.required]],
      category: ['', [Validators.required]],
      date: ['', [Validators.required]],
      location: ['', [Validators.required]],
    })
  }

  createReport(){
    console.log(this.reportForm.value);
    this.reportService.create_report(this.reportForm?.value).then(resp => {
      window.alert('Incident Report Submitted Successfully');
      this.reportForm?.reset();
    })
    .catch(error => {
      console.log(error.message);
    });
  }

}
