import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  constructor(private router: Router) {}

  async navigateToLogin(){
    await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/login',{replaceUrl:true});
  }
  navigateToRegister(){
    this.router.navigate(['signup'])
  }
}
