import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  darkMode: any;
  showtheme: any;

  //darkval: boolean = false;
  //showtheme: boolean = false;

  constructor(private router: Router,
    public themeService: ThemeService) {
      this.darkMode = this.themeService.darkMode;
     }

  ngOnInit() {
  }

  /*toggleDarkMode(){
    this.themeService.toggleAppTheme();
  }*/

  toggletheme(){
    this.showtheme = !this.showtheme;
  }

}
