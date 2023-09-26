import { Component, Input, OnInit } from '@angular/core';
import { Awareness } from '../Models/awareness';
import { AwarenessService } from '../Services/awareness.service';
import { FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user-awareness',
  templateUrl: './user-awareness.page.html',
  styleUrls: ['./user-awareness.page.scss'],
})
export class UserAwarenessPage implements OnInit {
  @Input() booking?: Awareness;
  reportList! : any[];
  reportData: Awareness = {
    discription: '',
  };
  message = '';

  constructor(private reportService: AwarenessService, public formBuilder: FormBuilder, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.message='';

    this.reportService.read_reports().subscribe((data: any) => {
      this.reportList = data.map((e: any) => {
        return {
          discription: e.payload.doc.data()['discription'],
        };
      })
      console.log(this.reportList);
    });
  }

}
