import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userId: string;
  public fullName: string;
  collectionName = 'chats';

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  getUser(): Promise<firebase.User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signup(
    email: string,
    password: string,
    fullName: string,
    designation: string,
    uid: string
  ): Promise<firebase.auth.UserCredential> {
    try {
      const newUserCredential: firebase.auth.UserCredential = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password,
      );
      uid = newUserCredential.user.uid;
      await this.firestore
        .doc(`userProfile/${newUserCredential.user.uid}`)
        .set({ email, fullName, designation, uid});

      return newUserCredential;
    } catch (error) {
      throw error;
    }
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }


  delete_chat(recordId) {
    this.firestore.doc(this.collectionName + '/' + recordId).delete();
  }


}
