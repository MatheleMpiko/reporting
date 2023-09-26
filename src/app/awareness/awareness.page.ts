import { Component, OnInit } from '@angular/core';
import { Awareness } from '../Models/awareness';
import { AwarenessService } from '../Services/awareness.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-awareness',
  templateUrl: './awareness.page.html',
  styleUrls: ['./awareness.page.scss'],
})
export class AwarenessPage implements OnInit {
  reportData!: Awareness;
  awarenessForm!: FormGroup;

  constructor(private reportService: AwarenessService,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.awarenessForm = this.formBuilder.group({
      discription: ['', [Validators.required]],
    })
  }

  raiseAwareness(){
    console.log(this.awarenessForm.value);
    this.reportService.create_report(this.awarenessForm?.value).then((resp: any) => {
      window.alert('Incident Report Submitted Successfully');
      this.awarenessForm?.reset();
    })
    .catch((error: { message: any; }) => {
      console.log(error.message);
    });
  }

}
