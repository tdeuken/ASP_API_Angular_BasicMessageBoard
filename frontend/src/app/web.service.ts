import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
//To allow users to see errors
import { MatSnackBar } from '@angular/material';

@Injectable()
export class WebService {
    
    BASE_URL = 'http://localhost:63795/api';

    messages = [];

    constructor(private http: Http, private sb : MatSnackBar){
        //Get messages as soon as possible
        this.getMessages();

    }
    
    //await on a response. So we can set the response to the messages array inside the web serves
    async getMessages(user){
        //Create Try/Catch so if the server is down the user will be notified message not sent
        try 
        {   //check if there is a user then add it to the URL with
            user = (user) ? '/' + user: '';
             //This returns messages from the api/message backend set up in VS2017
             var response = await this.http.get(this.BASE_URL+'/messages'+user).toPromise();
             //This returns a parsed json file. 
             this.messages = response.json();
        } catch (error) 
        {
            this.handleError("Unable to get messages! :(");
        }
    }

    async postMessage(message){
        try {
            //This posts a message, arguments are the URL and the message
            var response = await this.http.post(this.BASE_URL+'/messages', message).toPromise();
            this.messages.push(response.json());
            
        } catch (error) {
            this.handleError("Unable to post message!! :(");
        }
        
    }

    private handleError(error){
        
        //Message for users to know error. 1. Message 2. Button for named close 3. How long message is up
        this.sb.open(error, 'close', {duration: 5000})
    }
}