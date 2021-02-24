import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { AlertController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
 /* public userProfile: UserProfile;
    public editProfileForm: FormGroup;

  // fullName: string;
 // email: string;
 // desig: string;
//  pwd: string;

  showNewPassword: boolean = false;
  newpasswordToggleIcon = 'eye';


  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController
  ) {

    this.editProfileForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.minLength(6)],
      fullName: ['', Validators.minLength(6)],
      designation: ['', Validators.minLength(5)],
    });
   }

  ngOnInit() {
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
      });
    });
  } 



  public toggleNewPassword() {
    this.showNewPassword = !this.showNewPassword;

    if (this.newpasswordToggleIcon === 'eye'){
      this.newpasswordToggleIcon = 'eye-off';
    }
    else{
      this.newpasswordToggleIcon = 'eye';
    }
  }

  async updateProfile() {
    try{
      this.profileService.updateName(this.editProfileForm.value.fullName);
      this.profileService.updateDesignation(this.editProfileForm.value.designation);
      this.profileService.updateEmail(this.editProfileForm.value.email, this.editProfileForm.value.password);

      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Update Profile',
        message: 'Your profile successfully updated',
        buttons: ['OK']
      });
      await alert.present();

    }catch (error) {
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Update Profile',
        message: error,
        buttons: ['OK']
      });
      await alert.present();
      // console.error(error);
    }

  }
  */


 public userProfile: UserProfile;


 showNewPassword: boolean = false;
 passwordToggleIcon = 'eye';




 public errorMessages = {
   fullName: [
     { type: 'required', message: 'Name is required' },
   ],
  designation: [
    { type: 'required', message: 'Designation is required' },
  ],
   email: [
    { type: 'required', message: 'email is required' },
    { type: 'email', message: 'Please enter a valid email address' },
  ],
   password: [
     { type: 'required', message: 'Password is required' },
     { type: 'minlength', message: 'Password length must be longer than 6 characters'},
     { type: 'maxlength', message: 'Password length must be longer than 30 characters'},
     { type: 'pattern', message: 'Password must contain numbers, uppercase and lowercase characters'}
   ],
 }

 changePasswordForm = this.formBuilder.group({
   fullName: ['', [Validators.required]],
   designation: ['', [Validators.required]],
   email: ['',
    [
      Validators.required,
      Validators.email
    ]
  ],
   password: ['',
     [
       Validators.required,
       Validators.minLength(6),
       Validators.maxLength(30),
       Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ]
   ],

 });


 constructor(
   private formBuilder: FormBuilder,
   private authService: AuthService,
   private router: Router,
   private profileService: ProfileService,
   private alertCtrl: AlertController,

   ) { }

 ngOnInit() {
   this.profileService.getUserProfile().then(profile$ => {
     profile$.subscribe(userProfile => {
       this.userProfile = userProfile;
     });
   });
 }

 get fullName() {
   return this.changePasswordForm.get('fullName');
 }
 get designation() {
  return this.changePasswordForm.get('designation');
}
  get password() {
   return this.changePasswordForm.get('password');
 }
 get email() {
  return this.changePasswordForm.get('email');
}



 public submit(){
    // console.log(this.changePasswordForm.value);
   this.updateProfile();
 }


 public togglePassword(){
   this.showNewPassword = !this.showNewPassword;

   if (this.passwordToggleIcon === 'eye'){
     this.passwordToggleIcon = 'eye-off';
   }
   else{
     this.passwordToggleIcon = 'eye';
   }
 }

 async updateProfile() {
  try{
    this.profileService.updateName(this.changePasswordForm.value.fullName);
    this.profileService.updateDesignation(this.changePasswordForm.value.designation);
    this.profileService.updateEmail(this.changePasswordForm.value.email, this.changePasswordForm.value.password);


    /*const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Update Profile',
      message: 'Your profile successfully updated',
      buttons: ['OK']
    });
    await alert.present();*/

  }catch (error) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Update Profile',
      message: error,
      buttons: ['OK']
    });
    await alert.present();
    // console.error(error);
  }

}


}
