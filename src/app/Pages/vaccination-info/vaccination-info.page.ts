import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationService } from '../../services/vaccination.service';
import { Vaccination } from 'src/app/models/Vaccine';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vaccination-info',
  templateUrl: './vaccination-info.page.html',
  styleUrls: ['./vaccination-info.page.scss'],
})
export class VaccinationInfoPage implements OnInit {
  ctid;
  vaccine: Vaccination = {
    id: '',
    cattleid: '',
    // veterinarianid: '',
    userid:'',
    date: '',
    nameOfVaccine: '',
    purposeOfVaccine: '',
    nextVaccineDate: '',
    reasonOfNextVaccine: '',
    remarks: ''
  }

  public vaccines: Observable<Vaccination[]>;
  isVetHidden = false;
  isInsHidden = false;
  designation;
  constructor(public alertController: AlertController,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private vaccinationService: VaccinationService) {
              this.ctid =  sessionStorage.getItem('cattleTagId');
              this.designation = localStorage.getItem('designation');
              }

  ngOnInit() {
    this.vaccines = this.vaccinationService.getVaccines();
    if (this.designation === 'Instructor'){
      this.isVetHidden = true;
     }else{
      this.isInsHidden = true;
   }
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){
      this.vaccinationService.getVaccine(id).subscribe(vaccineData => {
        this.vaccine = vaccineData;
      });
    }
  }

  async deleteVaccine(vaccineid) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete',
      message: '<strong>Do you want to delete?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.vaccinationService.deleteVaccine(vaccineid).then(() => {
              this.router.navigateByUrl('/tabs/view-vaccine/' + this.ctid);
            }, err => {
            });
          }
        }
      ]
    });

    await alert.present();
  }

  goback(){
    this.router.navigateByUrl('/tabs/view-cattle/' + this.ctid);
   }
}
