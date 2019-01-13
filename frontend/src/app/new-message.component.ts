import { Component } from '@angular/core'
import {WebService} from './web.service'


@Component({
    selector: 'new-message',
    template:  `<mat-card class="card">
                      <mat-card-content>
                        <mat-form-field>
                            <!--Make the app 2 way binded-->
                            <input [(ngModel)]="message.owner" matInput placeholder="Name">
                        </mat-form-field>
                        <mat-form-field>
                            <!--Make the app 2 way binded-->
                            <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
                        </mat-form-field>
                        <mat-card-actions>
                            <!--(click) button calls the function post()-->
                            <button (click)="post()" mat-button color="primary">POST</button>
                        </mat-card-actions>
                      </mat-card-content>
                </mat-card>`
})

export class NewMessagesComponent{
    


    //access to the service
    constructor(private webService: WebService){}
    //Messages variable that stores what user Types
    message ={
        owner : "",
        text : ""
    }
    post(){
        //Just so I can see in console if its working.
        this.webService.postMessage(this.message);

    }

}