import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { AlertController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {


  public userProfile: UserProfile;
  showOldPassword: boolean = false;
  oldpasswordToggleIcon = 'eye';

  showNewPassword: boolean = false;
  newpasswordToggleIcon = 'eye';

  showConfirmPassword: boolean = false;
  confirmpasswordToggleIcon = 'eye';

  newPwd: string;
  oldPwd: string;
  confirmPwd: string;

  public errorMessages = {
    oldPassword: [
      { type: 'required', message: 'Not match with your password' },
    ],
    newPassword: [
      { type: 'required', message: 'New Password is required' },
      { type: 'minlength', message: 'New Password length must be longer than 6 characters'},
      { type: 'maxlength', message: 'New Password length must be longer than 30 characters'},
      { type: 'pattern', message: 'New Password must contain numbers, uppercase and lowercase characters'}
    ],
    confirmPassword: [
      { type: 'required', message: 'Confirm Password is required' },
      { type: 'minlength', message: 'Confirm Password length must be longer than 6 characters'},
      { type: 'maxlength', message: 'Confirm Password length must be longer than 30 characters'},
      { type: 'pattern', message: 'Confirm Password must contain numbers, uppercase and lowercase characters'}
    ],
  }

  changePasswordForm = this.formBuilder.group({
    oldPassword: ['', [Validators.required]],
    newPassword: ['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]
    ],
    confirmPassword: ['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]
    ]
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

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }
   get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }
  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }



  public submit(){
    // console.log(this.changePasswordForm.value);
    this.updatePassword();
  }

  public toggleOldPassword(){
    this.showOldPassword = !this.showOldPassword;

    if (this.oldpasswordToggleIcon === 'eye'){
      this.oldpasswordToggleIcon = 'eye-off';
    }
    else{
      this.oldpasswordToggleIcon = 'eye';
    }
  }

  public toggleNewPassword(){
    this.showNewPassword = !this.showNewPassword;

    if (this.newpasswordToggleIcon === 'eye'){
      this.newpasswordToggleIcon = 'eye-off';
    }
    else{
      this.newpasswordToggleIcon = 'eye';
    }
  }

  public toggleConfirmPassword(){
    this.showConfirmPassword = !this.showConfirmPassword;

    if (this.confirmpasswordToggleIcon === 'eye'){
      this.confirmpasswordToggleIcon = 'eye-off';
    }
    else{
      this.confirmpasswordToggleIcon = 'eye';
    }
  }




async updatePassword(){

  try {
    if (this.newPwd === this.confirmPwd){
      this.profileService.updatePassword(
        this.newPwd,
        this.oldPwd
      );

    /*  const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Password Change',
        message: 'Your Password Successfully Changed',
        buttons: ['OK']
      });
      await alert.present();*/
    }else{
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Password Error',
        message: 'Confirm password & new password does not match',
        buttons: ['OK']
      });
      await alert.present();
    }


  } catch (error) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Password Change',
      message: error,
      buttons: ['OK']
    });
    await alert.present();
    // console.error(error);
  }

}

}
