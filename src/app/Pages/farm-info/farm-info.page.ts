import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Farm } from '../../models/Farm';
import { FarmService } from '../../services/farm.service';
import { Cattle } from 'src/app/models/Cattle';
import { CattleService } from 'src/app/services/cattle.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-farm-info',
  templateUrl: './farm-info.page.html',
  styleUrls: ['./farm-info.page.scss'],
})
export class FarmInfoPage implements OnInit {

  term = '';
  farm: Farm = {
    id: '',
    farmName: '',
    farmRegNo: '',
    ownerName: '',
    veterinarianDivision: '',
    GSDivision: '',
    address: '',
    contactNo: '',
    cattleCount: '',
    dairyCattleCount: ''
  }

  public cattles: Observable<Cattle[]>;
  fid: string;
  

  constructor(public alertController: AlertController,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private farmService: FarmService,
              private cattleService: CattleService) {
      // this.fid = localStorage.getItem('farmid'); 
      this.fid = sessionStorage.getItem('farmId');
      
    }

  ngOnInit() {
    this.cattles = this.cattleService.getCattles();

  }
  ionViewWillEnter(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){
      this.farmService.getFarm(id).subscribe(farmData => {
        this.farm = farmData;
      });
    }
  }

  async deleteFarm() {
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
            this.farmService.deleteFarm(this.farm.id).then(() => {
              this.router.navigateByUrl('/tabs/farmhouse');
            }, err => {
            });
          }
        }
      ]
    });

    await alert.present();
  }

  gotomore(cattleTagId){
    sessionStorage.setItem('cattleTagId', cattleTagId);
   // this.nav.navigateForward('tabs/chat');
   // this.router.navigateByUrl('/chat');
  }

}
