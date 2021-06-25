import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { list } from '../store/model/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todorouting',
  templateUrl: './todorouting.component.html',
  styleUrls: ['./todorouting.component.css']
})
export class TodoroutingComponent implements OnInit {
  id: number;
  private sub: any;
  lists: list[];
  lists$: Observable<any> = this.store.select(state => state.toDo);
  todo: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private store: Store<{ toDo: list[] }>
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    {
      this.store.dispatch({ type: '[to-do] get Lists' });
      this.lists$.subscribe((list: any) => {
        //console.log(list);
       // console.log(this.lists);
        this.lists = list.toDo;
        this.todo = this.lists.find(todo => todo.id == this.id);
       // console.log(this.todo);
      })
    }
  }
}