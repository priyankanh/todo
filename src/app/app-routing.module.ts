import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { TdformComponent }from './forms/tdform/tdform.component';
import { ReformComponent} from './forms/reform/reform.component';
import { TodoroutingComponent} from '../app/todorouting/todorouting.component';
import { ProductComponent } from '../app/product/product.component';


const routes: Routes = [{path : '', component : ReformComponent },
                         {path : 'todo', component : ToDoComponent}, 
                       // {path : 'TodoroutingComponent', component : TodoroutingComponent},
                          {path : 'TodoroutingComponent/:id', component : TodoroutingComponent},
                          { path : 'products', component : ProductComponent }
                      ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
