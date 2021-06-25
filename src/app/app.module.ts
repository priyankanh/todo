import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ToDoEffects } from './store/effects/to-do.effects';
import { TodoReducer } from './store/reducer/to-do.reducers';
import { HttpClientModule } from '@angular/common/http';
import { TodoroutingComponent } from './todorouting/todorouting.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TdformComponent } from './forms/tdform/tdform.component';
import { ReformComponent } from './forms/reform/reform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './to-do/error/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TodoroutingComponent,
    TdformComponent,
    ReformComponent,
    ProductComponent,
    ErrorComponent
          ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({toDo: TodoReducer}),
    RouterModule.forRoot([]), //routes
    EffectsModule.forRoot([ToDoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: environment.production
    }),
    /* StoreRouterConnectingModule.forRoot({
      serializer: ,                              //dout
    }), */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
