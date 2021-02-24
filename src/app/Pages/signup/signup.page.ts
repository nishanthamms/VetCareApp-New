import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { auth } from 'firebase';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
/*
  public loading: HTMLIonLoadingElement;
 // public registrationForm: FormGroup;
  showPassword: boolean = false;
  passwordToggleIcon = 'eye';

  showConfirmPassword: boolean = false;
  confirmpasswordToggleIcon = 'eye';

  public errorMessages = {
    firstName: [
      { type: 'required', message: 'First Name is required' },
      { type: 'minlength', message: 'First Name cannot be longer than 2 characters'},
      { type: 'maxlength', message: 'First Name cannot be longer than 50 characters'}
    ],
    lastName: [
      { type: 'required', message: 'Last Name is required' },
      { type: 'minlength', message: 'Last Name cannot be longer than 2 characters'},
      { type: 'maxlength', message: 'Last Name cannot be longer than 50 characters'}
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address'}
    ],
    phone: [
      { type: 'required', message: 'Phone No. is required' },
      { type: 'maxlength', message: 'Phone No. length must be longer than 10 characters'},
      { type: 'pattern', message: 'Please enter a valid phone number'}
    ],
    designation: [
      { type: 'required', message: 'Designation is required' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password length must be longer than 6 characters'},
      { type: 'maxlength', message: 'Password length must be longer than 30 characters'},
      { type: 'pattern', message: 'Password must contain numbers, uppercase and lowercase characters'}
    ],
    confirmPassword: [
      { type: 'required', message: 'Confirm password should match with your entered password' },
      /*{ type: 'minlength', message: 'Password length must be longer than 6 characters'},
      { type: 'maxlength', message: 'Password length must be longer than 30 characters'},
      { type: 'pattern', message: 'Password must contain numbers, uppercase and lowercase characters'}
    ]
  };

  registrationForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    email: ['',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]
    ],
    phone: ['',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]
    ],
    designation: ['', Validators.required],
    password: ['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]
    ],
    confirmPassword: ['', Validators.required]
  });
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService,
              private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get phone() {
    return this.registrationForm.get('phone');
  }
  get designation() {
    return this.registrationForm.get('designation');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }



  public submit(){
    console.log(this.registrationForm.value);
  }

  navigateToLogin(){
    this.router.navigate(['login'])
  }
  navigateToHome(){
    this.router.navigate(['home'])
  }

  public togglePassword(){
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye';
    }
  }

  public toggleConfirmPassword(){
    this.showConfirmPassword = !this.showConfirmPassword;

    if(this.confirmpasswordToggleIcon == 'eye'){
      this.confirmpasswordToggleIcon = 'eye-off';
    }
    else{
      this.confirmpasswordToggleIcon = 'eye';
    }
  }
*/

@ViewChild(AuthFormComponent)
signupForm: AuthFormComponent;
constructor(private authService: AuthService, private router: Router) {}

ngOnInit() {}

async signupUser(credentials: UserCredential): Promise<void> {
  try {
    const userCredential: firebase.auth.UserCredential = await this.authService.signup(
      credentials.email,
      credentials.password,
      credentials.fullName,
      credentials.designation,
      credentials.uid,
    );
    this.authService.userId = userCredential.user.uid;
   // localStorage.setItem('userid', this.authService.userId);


    await this.signupForm.hideLoading();
    this.router.navigateByUrl('tabs/farm');
  } catch (error) {
    await this.signupForm.hideLoading();
    this.signupForm.handleError(error);
  }
}
navigateToHome(){
  this.router.navigate(['home']);
}

}
