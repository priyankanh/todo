import { ActivatedRouteSnapshot } from '@angular/router';
import { createReducer , on} from '@ngrx/store';
import { loadListsSuccess , addListsSuccess, deleteListSuccess , updateListSuccess,
         loadListsFail, addListsFail, deleteListsFail, updateListsFail} from '../actions/to-do.actions';
import { list } from '../model/index';

export interface State {
    toDo: list[]; 
    lasttoDo : list;
    error: string;
}


export const initialState: State = {
    toDo: [],
    lasttoDo: { title : '',
    completed : '',
    description : '',
     id: 0 },
     error: '',
}

export const TodoReducer = createReducer(
    initialState,
    on(loadListsSuccess, (state, action) => ({
        ...state,
        toDo: action.payload
    })),
     on(addListsSuccess, (state, action) => ({
        ...state,
        lasttoDo: action.payload
    })),
    on(deleteListSuccess, (state, action) => ({
        ...state,
        lasttoDo: action.payload
    })) ,
    on(updateListSuccess, (state, action) => ({
        ...state,
        lasttoDo: action.payload
    })) ,
    on(loadListsFail, (state, action) => ({
        ...state,
        error: action.error
    })),
     on(addListsFail, (state, action) => ({
        ...state,
        error: action.error
    })),
    on(deleteListsFail, (state, action) => ({
        ...state,
        error: action.error
    })) ,
    on(updateListsFail, (state, action) => ({
        ...state,
        error: action.error
    })) 
);









