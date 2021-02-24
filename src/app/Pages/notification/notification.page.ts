import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationService } from '../../services/vaccination.service';
import { Vaccination } from 'src/app/models/Vaccine';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  public vaccines: Observable<Vaccination[]>;
  now = new Date();
  today;
  designation;
  constructor(private router: Router, private vaccinationService: VaccinationService,
              private activatedRoute: ActivatedRoute) { 
                this.designation = localStorage.getItem('designation');
              }

  ngOnInit() {
    this.vaccines = this.vaccinationService.getVaccines();
    this.today = formatDate(this.now, 'yyyy-MM-dd', 'en-US');
    console.log(this.today);
  }
 /* single_notification() {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      sound: 'file://sound.mp3',
      data: { secret: 'key_data' }
    });
  }*/

}
