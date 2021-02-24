import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  darkMode: any;

  constructor(
    private platform: Platform,
    private storage: Storage,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeService: ThemeService
  ) 
  {
    this.initializeApp();
  }

  /*toggleDarkMode(){
    this.themeService.toggleAppTheme();
  }*/
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('dark-theme').then((val) => {
      console.log('Theme From Storage', val);
      if(val) {
        this.themeService.enableDark();
      }
    });
  }

  
  /*name = 'Angular 6';
  tab : any = 'tab1';
  tab1 : any
  tab2 : any
  tab3 : any
  Clicked : boolean
  
 
    onClick(check){
    //    console.log(check);
        if(check==1){
          this.tab = 'tab1';
        }else if(check==2){
          this.tab = 'tab2';
        }else if(check==3){
          this.tab = 'tab3';
        }else if(check==4){
          this.tab = 'tab4';
        }else if(check==5){
          this.tab = 'tab5';
        }else if(check==6){
          this.tab = 'tab6';
        }else if(check==7){
          this.tab = 'tab7';
        }else if(check==8){
          this.tab = 'tab8';
        }else if(check==9){
          this.tab = 'tab9';
        }else if(check==10){
          this.tab = 'tab10';
        }          
      }

    onSwitch(check){
 
      switch (check) {
       case 1:
         return 'tab1';
       case 2:
         return 'tab2';
       case 3:
         return 'tab3';
     }
  }*/
}
