import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from 'src/app/modules/todo-list/todo-list/todo-list.component'
import { TodoService } from './services/todoservice.service';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { todoReducer } from './store/reducer/todoreducer';


@NgModule({
  declarations: [
    AppComponent,
    //UserListComponent
    TodoListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //StoreModule.forRoot({ users: TodoReducer }),
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
    }),
  
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
