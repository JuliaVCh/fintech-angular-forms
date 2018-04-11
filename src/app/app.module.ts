import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { ApiService } from './services/http';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegistrationComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDKrN2jZfolf59wZkTBCTu_JbUTp7gQSQY',
      projectId: 'fintch-forms',
    })
  ],
  providers: [AngularFirestore, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
