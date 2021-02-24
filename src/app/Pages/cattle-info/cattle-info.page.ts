import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CattleService } from '../../services/cattle.service';
import { Cattle } from '../../models/Cattle';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserProfile } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-cattle-info',
  templateUrl: './cattle-info.page.html',
  styleUrls: ['./cattle-info.page.scss'],
})
export class CattleInfoPage implements OnInit {

  fid;
  ctid;
  designation;
  cattle: Cattle = {
    id: '',
    farmid: '',
    cattleTagId: '',
    cattleBreed: '',
    cattleDOB: '',
    specialFeature: '',
    sex: '',
    noLactation: '',
    birthWeg: '',
    breedingWeg: '',
    cattleWeaningWeg: '',
    avgPreWeg: '',
    avgPostWeg: '',
    lastCalvingDate: '',
    cattleImg: '',
  };
//  private cattles: Observable<Cattle[]>;
  public userProfile: UserProfile;

  isVetHidden = false;
  isInsHidden = false;
  constructor(private actionSheetCtrl: ActionSheetController,
              public alertController: AlertController,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private profileService: ProfileService,
              private cattleService: CattleService) {
              this.ctid =  sessionStorage.getItem('cattleTagId');
              this.fid =  sessionStorage.getItem('farmId');
              this.designation = localStorage.getItem('designation');
               }

  ngOnInit() {
    
    // window.location.reload();
    // this.cattle =  this.cattleService.getCattles();
    /*this.profileService.getUserProfile().then(profile$ => {
    profile$.subscribe(userProfile => {
      this.userProfile = userProfile;
     console.log(this.userProfile?.designation);
      if (this.userProfile?.designation === 'Instructor'){
            this.ishidden = true;
      }
    });
  });*/
 //  console.log(localStorage.getItem('designation'));
     if (this.designation === 'Instructor'){
      this.isVetHidden = true;
     }else{
    this.isInsHidden = true;
   }

  }

  ionViewWillEnter(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (id){
      this.cattleService.getCattle(id).subscribe(cattleData => {
        this.cattle = cattleData;
      });
    }
  }

  async deleteCattle() {
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
            this.cattleService.deleteCattle(this.cattle.id).then(() => {
              this.router.navigateByUrl('/tabs/view-farm/' + this.fid);
            }, err => {
            });
          }
        }
      ]
    });

    await alert.present();
  }


  vaccine(){
    this.router.navigateByUrl('/tabs/view-vaccine/' + this.ctid);
  }

  disease(){
    this.router.navigateByUrl('/tabs/view-disease/' + this.ctid);
  }

  breeding(){
    this.router.navigateByUrl('/tabs/view-breeding/' + this.ctid);
  }

  async showVetActionSheet(){
    await this.actionSheetCtrl.create({
      cssClass: 'add',
      // header: 'Add New Informations',
      buttons: [
        {
          text: 'Add New Vaccination Information',
          // cssClass: 'add',
          handler: () => {
            console.log('Add Vaccination info clicked');
            this.navigateToAddVaccination();
          }
        },
        {
          text: 'Add New Disease Information',
          // cssClass: 'add',
          handler: () => {
            console.log('Add Disease info clicked');
            this.navigateToAddDisease();
          }
        },
        {
          text: 'Add New Breeding Information',
          // cssClass: 'add',
          handler: () => {
            console.log('Add Breeding info clicked');
            this.navigateToAddBreeding();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(res => res.present());
  }

  async showInsActionSheet(){
    await this.actionSheetCtrl.create({
      cssClass: 'add',
      // header: 'Add New Informations',
      buttons: [
        {
          text: 'Add New Breeding Information',
          // cssClass: 'add',
          handler: () => {
            console.log('Add Breeding info clicked');
            this.navigateToAddBreeding();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(res => res.present());
  }
  navigateToAddVaccination(){
    this.router.navigate(['tabs/add-vaccination']);
  }
  navigateToAddDisease(){
    this.router.navigate(['tabs/add-disease']);
  }
  navigateToAddBreeding(){
    this.router.navigate(['tabs/add-breeding']);
  }
  goback(){
   this.router.navigateByUrl('/tabs/view-farm/' + this.fid);
  }
}
