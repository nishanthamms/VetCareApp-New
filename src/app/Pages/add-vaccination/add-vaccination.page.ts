import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Vaccination } from 'src/app/models/Vaccine';
import { VaccinationService } from '../../services/vaccination.service';
import {Plugins, LocalNotificationEnabledResult,LocalNotificationActionPerformed,LocalNotification,Device} from '@capacitor/core'
const {LocalNotifications} = Plugins;
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-add-vaccination',
  templateUrl: './add-vaccination.page.html',
  styleUrls: ['./add-vaccination.page.scss'],
})
export class AddVaccinationPage implements OnInit {

  ctid;
  vaccine: Vaccination = {
    cattleid: sessionStorage.getItem('cattleTagId'),
    //veterinarianId: '',
    userid: localStorage.getItem('userid'),
    date: '',
    nameOfVaccine: '',
    purposeOfVaccine: '',
    nextVaccineDate: '',
    reasonOfNextVaccine: '',
    remarks: '',
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,private alertCtrl: AlertController,
    private vaccinationService: VaccinationService) {
      this.ctid =  sessionStorage.getItem('cattleTagId');
     }

  ngOnInit() {
  } 

  updateMyDate($event) {
    // console.log($event); // --> wil contains $event.day.value, $event.month.value and $event.year.value
     this.vaccine.date =  this.vaccine.date.split('T')[0]; 
     this.vaccine.nextVaccineDate =  this.vaccine.nextVaccineDate.split('T')[0];   
   }
  addVaccine(){
    this.vaccinationService.addVaccine(this.vaccine).then(() => {
      this.router.navigateByUrl('/tabs/view-vaccine/' + this.ctid);
      this.vaccine.date= '';
      this.vaccine.nameOfVaccine= '';
      this.vaccine.purposeOfVaccine= '';
      this.vaccine.nextVaccineDate= '';
      this.vaccine.reasonOfNextVaccine= '';
      this.vaccine.remarks= '';

      this.sheduleNotification(this.vaccine.nextVaccineDate,this.vaccine.cattleid);
    }, err => {
    });
  }
  
  async sheduleNotification(vacinedate,cattleid){

    await LocalNotifications.schedule({ 
      notifications: [
        {
          title: 'Vaccination Reminder',
          body: 'To Day is vaccination day of ' +cattleid+' cattle',
          id:2,
          extra:{
            data: 'Pass data to your handler'
          },
          iconColor: '#00e64d',
         // actionTypeId: 'CHAT_MSG',
          /*attachments:[
            {id:'face',url:'res://public/assets/vaccination_icon.png'}
          ],*/
          schedule: {at:new Date(vacinedate)},
        }
      ]
    });
   }
  

  goback(){
   
    this.router.navigateByUrl('/tabs/view-cattle/' + this.ctid);
   }
}
