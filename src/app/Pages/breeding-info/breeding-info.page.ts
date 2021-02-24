import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { BreedingService } from '../../services/breeding.service'; 
import { Breeding } from 'src/app/models/breeding';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breeding-info',
  templateUrl: './breeding-info.page.html',
  styleUrls: ['./breeding-info.page.scss'],
})
export class BreedingInfoPage implements OnInit {
  ctid;
  breeding: Breeding = {
    cattleid: '',
    dateOfHeatObserved: '',
    dateOfFirstAI: '',
    dateOfSecondAI: '',
    semanId: '',
    dateOfPD: '',
    dateOfLastCalving: '',
    noOfCalving: '',
    AIReceiptNo: ''
  }

  public breedings: Observable<Breeding[]>;

  constructor(public alertController: AlertController,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private breedingService: BreedingService) {
                this.ctid =  sessionStorage.getItem('cattleTagId');
               }

  ngOnInit() {
    this.breedings = this.breedingService.getBreedings();
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.breedingService.getBreeding(id).subscribe(breedingData => {
        this.breeding = breedingData;
      });
    }
  }

  async deleteBreeding(breedingid) {
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
            this.breedingService.deleteBreeding(breedingid).then(() => {
              this.router.navigateByUrl('/tabs/view-breeding/' + this.ctid);
            }, err => {
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm() {
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
