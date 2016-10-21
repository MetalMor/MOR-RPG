import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {GeneralComponent} from "./general.component";
import {Types} from "../types/id.type";

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Types
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
