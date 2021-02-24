import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DiseaseService } from '../../services/disease.service';
import { Disease } from 'src/app/models/disease';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-disease-info',
  templateUrl: './disease-info.page.html',
  styleUrls: ['./disease-info.page.scss'],
})
export class DiseaseInfoPage implements OnInit {
  ctid;
  disease: Disease = {
    cattleid: '',
    // veterinarianId: '',
    userid: '',
    date: '',
    clinicalSigns: '',
    typeOfClinicalSigns: '',
    diagnosis: '',
    treatment: '',
    remarks: ''
  }

  public diseases: Observable<Disease[]>;
  isVetHidden = false;
  isInsHidden = false;
  designation;
  constructor(public alertController: AlertController,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private diseaseService: DiseaseService) {
              this.ctid =  sessionStorage.getItem('cattleTagId');
              this.designation = localStorage.getItem('designation');
               }

  ngOnInit() {
    this.diseases = this.diseaseService.getDiseases();
    if (this.designation === 'Instructor'){
      this.isVetHidden = true;
     }else{
      this.isInsHidden = true;
   }
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.diseaseService.getDisease(id).subscribe(diseaseData => {
        this.disease = diseaseData;
      });
    }
  }

  async deleteDisease(diseaseid) {
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
            this.diseaseService.deleteDisease(diseaseid).then(() => {
              this.router.navigateByUrl('/tabs/view-disease/' + this.ctid);
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
