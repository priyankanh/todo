import {  Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, EMPTY, Observable } from 'rxjs';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import { ToDoService } from '../../to-do/services/to-do.service';
import * as Actionstype from '../actions/to-do.actions';

@Injectable()
export class ToDoEffects {
    loadLists$ = createEffect(() =>
        this.actions$.pipe(
            ofType(Actionstype.getLists),
            mergeMap(() => this.ToDoService.getItems()
                .pipe(
                    map(List => {
                        console.log(List);
                        return Actionstype.loadListsSuccess({ payload: List });
                    }),
                    catchError(err => {
                        console.log(err);
                        return of(Actionstype.loadListsFail({ error: err }))
                        })
                )            
        )
    ));      
                    
                      
    addListsSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(Actionstype.addLists),
        mergeMap((action) => this.ToDoService.addtask(action.payload)   //addtask(data: any) 
            .pipe(
                map(List => {
                    console.log(List, "error");
                    return Actionstype.addListsSuccess({ payload: List })
                }),
                    catchError(err => {
                    console.log(err);
                    return of(Actionstype.addListsFail({ error: err }))
                    })
            )
        )
    ));

    deleteListSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(Actionstype.deleteList),
        mergeMap((action) => this.ToDoService.deletetask(action.id)
            .pipe(
                map(List => {
                    console.log(List, "error");
                    return Actionstype.deleteListSuccess({ payload: List })
                }),
                catchError(err => {
                    console.log(err);
                    return of(Actionstype.deleteListsFail({ error: err }))
                    })
            )
        )
    ));
    updateListSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(Actionstype.updateList),
        mergeMap((action) => this.ToDoService.updatetask(action.payload)
            .pipe(
                map(List => {
                    console.log(List, "error");
                    return Actionstype.updateListSuccess({ payload: List })
                }),
                catchError(err => {
                    console.log(err);
                    return of(Actionstype.updateListsFail({ error: err }))
                    })
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private ToDoService: ToDoService
    ) { }

}

function data(data: any) {
    throw new Error('Function not implemented.');
}
