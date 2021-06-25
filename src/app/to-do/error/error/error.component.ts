import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { list } from '../../../store/model/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage: string = "";
  /* cancelButtonText = "Cancel"; */

  constructor(private store: Store<{ error : list[] }>) { }
  error$: Observable<any> = this.store.select(state => state.error);
  
  ngOnInit(): void {
    
     this.error$.subscribe((error: any) => {
      console.log(error) ; 
     this.errorMessage = error;
  } )

}
}
