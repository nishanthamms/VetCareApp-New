import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { UserProfile } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.page.html',
  styleUrls: ['./farm.page.scss'],
})
export class FarmPage implements OnInit {

  farmCount;
  cattlecount;
  public userProfile: UserProfile;
  isInsVetHidden = false;
  designation;
  gsdevision;
  constructor(public alertController: AlertController, private afs: AngularFirestore, private profileService: ProfileService) {

      this.afs.collection('farms').valueChanges()
        .subscribe( result => {
         this.farmCount = result.length;
        });

      this.afs.collection('cattles').valueChanges()
        .subscribe( result => {
         this.cattlecount = result.length;
        });

  }

  ngOnInit() {
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
       //  console.log(this.userProfile?.designation);
        localStorage.setItem('designation', this.userProfile?.designation);
        sessionStorage.setItem('gsdevision', this.userProfile?.gsdevision);
        this.designation = localStorage.getItem('designation');
        
        // this.designation = this.userProfile?.designation;
        if (this.designation !== 'Instructor' && this.designation !== 'Vetrinarian'){
           this.isInsVetHidden = true;
           this.presentAlert();
           // this.isVetHidden = false;
            }else{
             this.isInsVetHidden = false;
            // this.isVetHidden = true;
            }
      });
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
     // subHeader: 'Subtitle',
      message: 'You are not allowed to see the content.',
      buttons: ['OK']
    });

    await alert.present();
  }

  
}
