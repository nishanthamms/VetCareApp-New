import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import 'firebase/firestore';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userId: string;
  public fullName: string;
  collectionName = 'chats';
// Init with null to filter out the first value in a guard!
isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
token = '';

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private http: HttpClient
  ) {
    this.loadToken();
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });    
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }
  getUser(): Promise<firebase.User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    Storage.set({key: TOKEN_KEY, value: (email+password)});
    this.isAuthenticated.next(true);
    return this.afAuth.signInWithEmailAndPassword(email, password);
    
      
  }

 /* signin(email, password): Observable<any> {
    return this.http.post(email, password).pipe(
      map((data: any) => data.token),
      switchMap(token => {
        return from(Storage.set({key: TOKEN_KEY, value: token}));
        console.log("e&p"+email, password );
        console.log("Token"+ TOKEN_KEY);
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }*/
 
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
    this.isAuthenticated.next(false);
    Storage.remove({key: TOKEN_KEY});
    return this.afAuth.signOut();
    
  }


  delete_chat(recordId) {
    this.firestore.doc(this.collectionName + '/' + recordId).delete();
  }


}
