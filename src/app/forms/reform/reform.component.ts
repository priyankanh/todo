import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-reform',
  templateUrl: './reform.component.html',
  styleUrls: ['./reform.component.css']
})
export class ReformComponent implements OnInit {
  LoginForm = new FormGroup({

    UserName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    gmail: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])
  });

  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }
  onsubmit(){
    console.log(this.LoginForm.value);
    this.router.navigate(['/todo'])    
  };

 
}
