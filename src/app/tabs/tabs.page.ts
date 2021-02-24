import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  designation;
  isInsHidden = false;
  isVetHidden = true;
  isInsVetHidden = false;
  public userProfile: UserProfile;
  constructor(private profileService: ProfileService) {
    
   }

  ngOnInit() {
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
       //  console.log(this.userProfile?.designation);
        localStorage.setItem('designation', this.userProfile?.designation);
        console.log( this.userProfile?.designation);
        this.designation = localStorage.getItem('designation');
       // this.designation = this.userProfile?.designation;
        if (this.designation === 'Instructor'){
          this.isInsHidden = true;
          // this.isVetHidden = false;
          }
        else{
            this.isInsHidden = false;
           // this.isVetHidden = true;
           }

        if (this.designation !== 'Instructor' && this.designation !== 'Vetrinarian'){
            this.isInsVetHidden = true;
            // this.isVetHidden = false;
             }else{
              this.isInsVetHidden = false;
             // this.isVetHidden = true;
             }
      //  console.log(localStorage.getItem('designation'));
      });
    });
    /* this.designation = localStorage.getItem('designation');
    if (this.designation === 'Instructor'){
      this.isInsHidden = true;
      // this.isVetHidden = false;
       }else{
        this.isInsHidden = false;
       // this.isVetHidden = true;
       }*/
   //  console.log(this.designation);
  }


}
