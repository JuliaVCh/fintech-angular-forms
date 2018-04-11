import { Component, OnInit } from '@angular/core';
import { ApiService, IMessages } from '../services/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../../../../angular-fintech-forms/src/app/services/http';
import { StorageService } from '../services/storage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Observable<IMessages[]>;
  user: IUser;
  message: string;
  isProcess = false;

  constructor(private http: ApiService) { }

  ngOnInit() {
    this.user = StorageService.getItem('user');
    this.messages = this.http.getMessageList();
  }

  onSubmit() {
    const data = {
      message: this.message,
      user: this.user.name,
      timesend: new Date().getTime()
    };

    this.isProcess = true;
    this.http.sendMessage(data)
      .then(() => {
        this.isProcess = false;
        this.message = '';
      });
  }

}
