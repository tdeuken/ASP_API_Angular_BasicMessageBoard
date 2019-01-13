import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component'
import {NewMessagesComponent} from './new-message.component'
import {NavComponent} from './nav.component'

@Component({
  selector: 'home',
  template: `
  <new-message></new-message>
  <messages></messages>

  `,
  styleUrls: ['./app.component.css']
})
export class HomeComponent {}
