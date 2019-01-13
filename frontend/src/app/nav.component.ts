import { Component } from '@angular/core'


@Component({
    
    //This name goes in app.components <nav></nav>
    selector: 'nav',
    template:  `
        <mat-toolbar color="primary">
            Message Board
            <!--Button for Nav bar. routerLink makes it load without page reload :)-->
            <button mat-button routerLink="/messages">Messages</button>
        </mat-toolbar>
    `
})

export class NavComponent{

    constructor(){}
    
}