import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ReportData } from '../Models/report-data';
import { ReporttextService } from '../Services/reporttext.service';
import { FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { log } from 'console';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  @Input() booking?: ReportData;
  term: any;
  reportList: any[] = [
    // Your initial list of items
  ];
  id: any;
  reportData: ReportData = {
    report: '',
    category: '',
    date: new Date,
    location: '',
    approved: false
  };
  message = '';
  filteredList: any[];

  constructor(private reportService: ReporttextService, private activateRoute: ActivatedRoute, public formBuilder: FormBuilder, private firestore: AngularFirestore) {
    this.filteredList = this.reportList;
    this.id = this.activateRoute.snapshot.paramMap.get('id');
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

  ngOnChanges(): void {
    this.message = '';
    this.reportData = { ...this.booking };
  }

  removeBooking(rowId: any) {
    console.log(rowId);
    
    window.confirm('Warning: The report will be canceled!');
    this.reportService.delete_report(rowId);
  }

  editBooking(booking: any) {
    booking.isEdit = {};
    booking.Editreport = booking.report;
    booking.Editcategory = booking.category;
    booking.Editdate = booking.date;
    booking.Editlocation = booking.location;
    // booking.EditBookingStatus = booking.BookingStatus;
  }

  updateBooking(bookingRow: any) {
    console.log(bookingRow.id);

    let booking: ReportData = {
      report: bookingRow.Editreport,
      category: bookingRow.Editcategory,
      date: bookingRow.Editdate,
      location: bookingRow.Editlocation,
    };
    window.confirm('Warning: The booking will be updated!');
    this.reportService.updateReport(bookingRow.id, booking);
    bookingRow.isEdit = false;
  }




  onSearch(item: any) {
    this.filteredList = this.reportList.filter(item => {
      return item.report.includes(this.term) || item.date.includes(this.term) || item.category.includes(this.term) || item.location.includes(this.term);
    });
  }
}