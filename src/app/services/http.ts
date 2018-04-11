import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

export interface IUser {
  name: string;
  password: string;
  life?: string;
}

export interface IMessages {
  user: string;
  message: string;
}

@Injectable()
export class ApiService {
  constructor(private afs: AngularFirestore) {}

  createNewUser(data: IUser) {
    return this.afs.collection<IUser>('users').add(data);
  }

  loginUser({name, password}: IUser) {
    return this.afs.collection<IUser>('users', ref => {
      return ref
        .where('name', '==', name)
        .where('password', '==', password);
    });
  }

  getMessageList() {
    return this.afs.collection<IMessages>('messages').valueChanges();
  }

  sendMessage(data: IMessages) {
    return this.afs.collection<IMessages>('messages').add(data);
  }
}
