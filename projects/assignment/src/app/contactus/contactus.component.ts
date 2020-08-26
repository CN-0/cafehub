import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  @ViewChild('form', { static: false }) messageForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    console.log(this.messageForm.value.email, this.messageForm.value.name, this.messageForm.value.subject, this.messageForm.value.message);
  }

}
