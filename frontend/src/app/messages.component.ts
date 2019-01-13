import { Component } from '@angular/core'
import {WebService} from './web.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    //This name goes in app.components <messages></messages>
    selector: 'messages',
                //Get messages from web services and ngFor loops and displays all of
    template:  `<div *ngFor="let message of webService.messages">
                    <mat-card class="card">
                        <!--Allow users to click on specific messages by people-->
                        <mat-card-title [routerLink]="['/messages', message.owner]" style="cursor:pointer">{{message.owner}}</mat-card-title>
                        <mat-card-content>{{message.text}}</mat-card-content>
                    </mat-card>
                </div>
                `
})

export class MessagesComponent{
    //access to the service
    constructor(private webService: WebService, private route: ActivatedRoute){
        
        }
        ngOnInit(){
            var name = this.route.snapshot.params.name;
            this.webService.getMessages(name);
        }

}