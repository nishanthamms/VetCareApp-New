import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserCredential } from 'src/app/models/user';
import { LoadingController, AlertController } from '@ionic/angular';
import { auth } from 'firebase';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  public loading: HTMLIonLoadingElement;
  // public authForm: FormGroup;
  @Input() actionButtonText: string;
  @Input() isPasswordResetPage = false;
  @Input() isLoginPage = false;
  @Input() isSignupPage = false;
  @Output() formSubmitted = new EventEmitter<any>();

  // showPassword: boolean = false;
  // passwordToggleIcon = 'eye';

  
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

authForm = this.formBuilder.group({


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
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
 
  }

  ngOnInit() {

    if (this.isLoginPage === true){
      this.authForm.controls['fullName'].clearValidators();
      this.authForm.controls['designation'].clearValidators();
    }
    if (this.isPasswordResetPage === true){
      this.authForm.controls['fullName'].clearValidators();
      this.authForm.controls['designation'].clearValidators();
      this.authForm.controls['password'].clearValidators();
    }
  }


  get fullName() {
    return this.authForm.get('fullName');
  }
  get designation() {
   return this.authForm.get('designation');
 }
   get password() {
    return this.authForm.get('password');
  }
  get email() {
   return this.authForm.get('email');
 }
 
 /* public submit(){
     // console.log(this.changePasswordForm.value);
   // this.updateProfile();
  }*/
 
  public togglePassword(){
    this.showNewPassword = !this.showNewPassword;
 
    if (this.passwordToggleIcon === 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye';
    }
  }
  submitCredentials(authForm: FormGroup): void {
    if (!authForm.valid) {
      console.log('Form is not valid yet, current value:', authForm.value);
    } else {
      this.showLoading();
      const credentials: UserCredential = {
        email: authForm.value.email,
        password: authForm.value.password,
        fullName: authForm.value.fullName,
        designation: authForm.value.designation,
        uid: '',
      };
      this.formSubmitted.emit(credentials);
    }
  }

  async showLoading(): Promise<void> {
    try {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
    } catch (error) {
      this.handleError(error);
    }
  }

  hideLoading(): Promise<boolean> {
    return this.loading.dismiss();
  }

  async handleError(error): Promise<void> {
    const alert = await this.alertCtrl.create({
      message: error.message,
      buttons: [{ text: 'Ok', role: 'cancel' }]
    });
    await alert.present();
  }

}
