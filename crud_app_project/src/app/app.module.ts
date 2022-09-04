import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MdCardModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    //MdButtonModule, MdCheckboxModule,
   // EmployeesComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
 export class AppModule{}