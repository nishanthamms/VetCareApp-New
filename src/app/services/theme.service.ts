import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import {Platform} from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import {Storage} from '@ionic/storage';
// const THEME_KEY = "selected-app-theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode: any;
  renderer: Renderer2;

  constructor(private plt: Platform,
              private rendererFactory: RendererFactory2,
              private storage: Storage,
              @Inject(DOCUMENT) private document: Document) {
      this.renderer = this.rendererFactory.createRenderer(null, null);
      /*this.plt.ready().then(()=>{
        this.storage.get(THEME_KEY).then(theme =>{
          this.setAppTheme(theme);
        });

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        prefersDark.addListener(e =>{
            console.log('matches: ',e);
            this.setAppTheme(e.matches);
        });
      })*/
  }

  enableDark(){
    this.renderer.addClass(this.document.body, 'dark-theme');
    this.storage.set('dark-theme', true);
    this.darkMode = true;
  }

  enableLight(){
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.storage.set('dark-theme', false);
    this.darkMode = false;
  }

  themeMode(){
    if (this.darkMode) {
      this.enableLight();
      console.log('darl Mode', this.darkMode);
    } else{
      this.enableDark();
      console.log('Dark Mode', this.darkMode);
    }
  }

  /*toggleAppTheme(){
    this.darkMode = !this.darkMode;
    this.setAppTheme(this.darkMode);
  }

  tgldrk:boolean = false;
  
  setAppTheme(dark){
    this.darkMode = dark;

    if(this.darkMode){
      document.body.classList.add("dark");
      this.tgldrk = true;
    }else{
      document.body.classList.remove("dark");
      this.tgldrk = false;
    }

    this.storage.set(THEME_KEY,this.darkMode);
 }*/
 
}
