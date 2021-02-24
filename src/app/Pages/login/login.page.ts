import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
/*
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address'}
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password length must be longer than 6 characters'},
      { type: 'maxlength', message: 'Password length must be longer than 30 characters'},
      { type: 'pattern', message: 'Password must contain numbers, uppercase and lowercase characters'}
    ]
  };

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
    password: ['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")
      ]
    ]
  });

  showPassword: boolean = false;
  passwordToggleIcon = 'eye';

  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  public submit(){
    console.log(this.loginForm.value);
  }

  navigateToFarm(){
    this.router.navigate(['tabs/farm'])
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

*/
@ViewChild(AuthFormComponent) loginForm: AuthFormComponent;


  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  async loginUser(credentials: UserCredential): Promise<void> {
    try {
      const userCredential: firebase.auth.UserCredential = await this.authService.login(
        credentials.email,
        credentials.password
      );
      this.authService.userId = userCredential.user.uid;
      localStorage.setItem('userid', this.authService.userId);
      await this.loginForm.hideLoading();
      this.router.navigateByUrl('tabs/farm');
    } catch (error) {
      await this.loginForm.hideLoading();
      this.loginForm.handleError(error);
    }
  }

}
