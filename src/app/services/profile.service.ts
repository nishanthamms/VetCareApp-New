import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { UserProfile } from '../models/user';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userProfile: AngularFirestoreDocument<UserProfile>;
  private currentUser: firebase.User;
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
    private alertCtrl: AlertController,
  ) {}

  async getUserProfile(): Promise<Observable<UserProfile>> {
    const user: firebase.User = await this.authService.getUser();
    this.currentUser = user;
    this.userProfile = this.firestore.doc(`userProfile/${user.uid}`);
    return this.userProfile.valueChanges();
  }

  updateName(fullName: string): Promise<void> {
    return this.userProfile.update({ fullName });
  }
  updateDesignation(designation: string): Promise<void> {
    return this.userProfile.update({designation});
  }
  updateProfImg(userImg: string): Promise<void> {
    return this.userProfile.update({ userImg });
  }
  async updateEmail(newEmail: string, password: string): Promise<void> {
    const credential: firebase.auth.AuthCredential = firebase.auth.EmailAuthProvider.credential(
      this.currentUser.email,
      password
    );
    try {
      await this.currentUser.reauthenticateWithCredential(credential);
      await this.currentUser.updateEmail(newEmail);

      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Update Profile',
        message: 'Your profile successfully updated',
        buttons: ['OK']
      });
      await alert.present();

      return this.userProfile.update({ email: newEmail });
    } catch (error) {
      // console.error(error);
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Update Profile',
        message: error,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async updatePassword(
    newPassword: string,
    oldPassword: string
  ): Promise<void> {
    const credential: firebase.auth.AuthCredential = firebase.auth.EmailAuthProvider.credential(
      this.currentUser.email,
      oldPassword
    );
    try {
      await this.currentUser.reauthenticateWithCredential(credential);

      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Password Change',
        message: 'Your Password Successfully Changed',
        buttons: ['OK']
      });
      await alert.present();
      return this.currentUser.updatePassword(newPassword);

    } catch (error) {
     // console.error(error);
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Password Change',
        message: error,
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
