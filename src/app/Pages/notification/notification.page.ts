import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationService } from '../../services/vaccination.service';
import { Vaccination } from 'src/app/models/Vaccine';
import { Cattle } from 'src/app/models/Cattle';
import { CattleService } from 'src/app/services/cattle.service';
import { FarmService } from '../../services/farm.service';
import { Farm } from '../../models/Farm';
//import { FarmInfo } from '../../models/FarmInfo';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { NotificationService } from '../../services/notification.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})

export class NotificationPage implements OnInit {

  public vaccines: Observable<Vaccination[]>;
  public cattles: Observable<Cattle[]>;
  public farms: Observable<Farm[]>;

  public allfarms = [];
  userGSdevision :string;
  now = new Date();
  today;
  designation;
  constructor(private router: Router, private vaccinationService: VaccinationService,
              private activatedRoute: ActivatedRoute,private cattleService: CattleService,
              private farmService: FarmService,private notificationService: NotificationService) { 
                this.designation = localStorage.getItem('designation');
                this.userGSdevision = sessionStorage.getItem('gsdevision');
              }

  ngOnInit() {
    this.vaccines = this.vaccinationService.getVaccines();
    this.cattles = this.cattleService.getCattles();
    this.farms = this.farmService.getFarms();

     
    this.today = formatDate(this.now, 'yyyy-MM-dd', 'en-US');
    console.log(this.today);


      this.farms.forEach( (farmObj) => {
        this.cattles.forEach( (ctlObj) => {
          this.vaccines.forEach( (vacObj) => {

            for (var i in ctlObj) {
              for (var j in vacObj) {          
                for(var k in farmObj){
                  if(vacObj[j].nextVaccineDate === this.today){   
                    if(vacObj[j].cattleid===ctlObj[i].cattleTagId){
                      if(ctlObj[i].farmid===farmObj[k].farmRegNo){
                                    
                      
                          const frm = new FarmInfo(farmObj[k].farmName,farmObj[k].address,farmObj[k].GSDivision,ctlObj[i].cattleTagId,farmObj[k].farmRegNo);
                          this.allfarms.push(frm);
                         
                        
                        
                      } 
                    }
                  }    
                } 
              }              
            }
          });
        });
      });
      
     
}

viewCattle(cttleTag,frmId){
 
 //console.log("Hello cattle"+cttleTag);
 //console.log("Hello farm"+frmId);
 sessionStorage.setItem('farmId', frmId);
 sessionStorage.setItem('cattleTagId', cttleTag);
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
class FarmInfo{

  public farm: string;
  public address: string;
  public gsdevision: string;
  public cattleTag: string;
  public farmId: string;

 public constructor(farm,address, gsdevision,cattle,farmId){
  this.farm = farm;
  this.address = address;
  this.gsdevision = gsdevision;
  this.cattleTag = cattle;
  this.farmId = farmId;
 } 

}
