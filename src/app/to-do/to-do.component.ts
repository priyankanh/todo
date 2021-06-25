import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoService } from './services/to-do.service';
import { list } from '../store/model/index';
import { createAction, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as Actionstype from '../store/actions/to-do.actions';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

   AddForm = new FormGroup({
        addTask: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      selectStatus: new FormControl('', [
        Validators.required
      ]),
      addDes: new FormControl('', [
        Validators.required
      ])
    }); 

  lists: list[];
  lists$: Observable<any> = this.store.select(state => state.toDo); //selector
  filterarray: any;
  displayedColumns = ['id', 'title', 'completed', 'description', 'delete'];
  displayedfilterColumns =['id', 'title', 'completed', 'description'];
  msg: string;
   
   data = { 
     id : '', 
    title: '',
    completed: '',
    description: '',
    }

  //dataSource: any;
  dataSource: MatTableDataSource<list>; //api data
  filterdataSource: MatTableDataSource<list>;
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  
  constructor(private store: Store<{ toDo: list[] }>,
    private router: Router, private service: ToDoService, private actions$: Actions,
    private dialog: MatDialog)
     {
      }

  ngOnInit() {
    this.store.dispatch({ type: '[to-do] get Lists' }); //getlist
  
    // console.log(this.lists$)
    this.lists$.subscribe((list: any) => {
      console.log(list)
      this.lists = [...list.toDo];
    
      this.dataSource = new MatTableDataSource(this.lists); // our list is assigned to data source and it will be implment on html mat-table
       /*  this.store.dispatch({ type: '[add] add Lists Success'}); */  // add list
           
      this.dataSource.sort = this.sort;
       this.filterarray= this.lists.filter(function (el) {
          return el.completed            
    })
    this.filterdataSource = new MatTableDataSource(this.filterarray); 
    console.log( this.filterarray);
  })
  }
  ngAfterViewInit() {    
} 
  goto(id: any) {
    this.router.navigate(['/TodoroutingComponent', id]);
    console.log(id)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addtask(){
    console.log(this.AddForm.value);
    let data = { 
      title: this.AddForm.value.addTask,
      completed: this.AddForm.value.selectStatus,
      description: this.AddForm.value.addDes,
      }
       // this.service.addtask(data)
        this.store.dispatch(Actionstype.addLists({ payload: data }))
          location.reload()
         console.log(data);
    } 

    deletetask(id : number){
           this.store.dispatch(Actionstype.deleteList({ id: id }))
      location.reload()
    }
  callAPI(list: any){
       let dialogRef = this.dialog.open(this.callAPIDialog);  
       this.data.id = list.id;     
       this.data.title = list.title;
       this.data.completed = list.completed;
       this.data.description = list.description; 
             
} 
   
updatetask(data : any)
{
  this.store.dispatch(Actionstype.updateList({ payload: data }))
    console.log(data);
 // location.reload()
}

closeDialog(){
  let dialogRef =this.dialog.closeAll();
  location.reload()
  }
} 








