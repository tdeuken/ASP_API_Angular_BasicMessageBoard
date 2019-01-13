import { Component } from '@angular/core';
import {NavComponent} from './nav.component'

//Shown on every page
@Component({
  selector: 'app-root',
  template: `
  <nav></nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
