import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  information: any[];

  constructor(public navCtrl: NavController, 
    private http: Http) {
      let localData = this.http.get('assets/information.json').pipe(map(res => res.json().items));
      localData.subscribe(data => {
        this.information = data;
      });
  }

  ngOnInit() {
  }

  toggleSection(i){
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

}
