import { createAction, props } from '@ngrx/store';

export const getLists = createAction(
    '[to-do] get Lists');

export const loadListsSuccess = createAction(   //sucess
    '[to-do] load Lists Success',
    props<{ payload: any }>()
);

export const loadListsFail = createAction(  
    '[to-do] load Lists Fail',
    props<{ error: any }>() 
);

export const addLists = createAction(
    '[add] add Lists',
    props<{ payload: any }>()
);

export const addListsSuccess = createAction(
    '[add] add Lists Success',
    props<{ payload: any }>()
);

export const addListsFail = createAction(  
    '[to-do] add Lists Fail',
    props<{ error: any }>()
);

export const deleteList = createAction(
    '[delete] delete Lists',
    props<{ id: number }>()
);

export const deleteListSuccess = createAction(
    '[delete] delete Lists Success',
    props<{ payload: any }>()
);

export const deleteListsFail = createAction(  
    '[to-do] delete Lists Fail',
    props<{ error: any }>()
);


export const updateList = createAction(
    '[update] update Lists',
    props<{ payload: any }>()
);

export const updateListSuccess = createAction(
    '[update] update Lists Success',
    props<{ payload: any }>()
);

export const updateListsFail = createAction(  
    '[to-do] update Lists Fail',
    props<{ error: any }>()
);
