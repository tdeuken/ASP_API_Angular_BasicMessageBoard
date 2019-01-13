import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, 
        MatCardModule, 
        MatInputModule, 
        MatSnackBarModule,
        MatToolbarModule } from '@angular/material';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { NewMessagesComponent} from './new-message.component';
import { FormsModule} from '@angular/forms';
import {NavComponent} from './nav.component';
import { RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

var routes = [{
  path: '',
  //Homepage components
  component: HomeComponent
}, {
  //Messages base route to see all messages
  path: 'messages',
  component: MessagesComponent
}, {
  //Messages for being able to click on specific name and users messages
  path: 'messages/:name',
  component: MessagesComponent
}];

@NgModule({
  declarations: [
    AppComponent, 
    MessagesComponent,
    NewMessagesComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule, 
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule,
    FormsModule,
    //get all the routes from variable object
    RouterModule.forRoot(routes),
 

  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})

export class AppModule { }

