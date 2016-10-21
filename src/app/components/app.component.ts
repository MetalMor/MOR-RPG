import { Component } from '@angular/core';
import {GeneralComponent} from "./general.component";

@Component({
  selector: 'app-root',
  templateUrl: '../app.component.html',
  styleUrls: ['../app.component.css']
})
export class AppComponent extends GeneralComponent {
  constructor(obj?: AppComponent) {
    super(obj);
    this.Name = "App Works!";
  }
}
