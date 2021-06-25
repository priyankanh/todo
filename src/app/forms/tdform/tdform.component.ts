import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators , NgForm} from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)  
  {
    console.log("form submitted");
    console.log(form.value);
  }
}
