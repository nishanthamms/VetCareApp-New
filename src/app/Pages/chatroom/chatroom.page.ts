import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {formatDate } from '@angular/common';
import { UserProfile } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {

  fullName;
  text: string;
  chatRef: any;
  uid: string;
  authState: any = null;
  today = new Date();
  jstoday = '';
  chatcollection: any;
  ReceiverId: string;
  public userProfile: UserProfile;
  docref: any;
  constructor(private authService: AuthService, private router: Router, public fs: AngularFirestore, public af: AngularFireAuth,
              private profileService: ProfileService) {

    this.uid = localStorage.getItem('userid');
   // this.chatRef = this.fs.collection('chats').valueChanges();
    this.chatRef = this.fs.collection('chats', ref => ref.orderBy('time')).valueChanges();
    this.af.authState.subscribe((auth) => {
      this.authState = auth;
    });
  //  this.jstoday = Date.now();
    this.fullName = sessionStorage.getItem('fullName');
 //   this.ReceiverId = sessionStorage.getItem('othrUid');

  }
  ngOnInit() {
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
      });
    });
    console.log(this.fullName);
  }



  get authenticated(): boolean {
    return this.authState !== null;
  }
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }


  send(){
    if (this.text !== ''){
        this.fs.collection('chats').add({
         // Id : docRef.id,
          Name: this.userProfile.fullName,
          message: this.text,
          UserID: this.currentUserId,
       //   ReceiverId: sessionStorage.getItem('othrUid'),
          time: new Date().getTime(),
        });
        this.text = '';
    }
  }

/*
  delete(){
    this.fs.collection("chats").doc("DxlfXGPYSXUr0Ceq0kin").delete().then(function () {
      console.log("Document successfully deleted!");
  }).catch(
      function(error) {
      console.error("Error removing document: ", error);
});
  }

  deletechat(data) {
    return this.fs.collection('chats').doc(data.payload.doc.id).delete();
 }

 deleteProduct(data) {
  this.fs.collection('chats').doc(data.id).delete();
}*/

doRefresh(event) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}


}
