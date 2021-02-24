import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/Farm';
import { FarmService } from '../../services/farm.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { UserProfile } from 'src/app/models/user';
@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.page.html',
  styleUrls: ['./add-farm.page.scss'],
})
export class AddFarmPage implements OnInit {

  farm: Farm = {
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

  fid;
  gsdevision;
  public userProfile: UserProfile;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private farmService: FarmService, private profileService: ProfileService,) { 
      this.fid = localStorage.setItem('farmid', this.farmService.farmId);
  }

  ngOnInit() {
    console.log(this.gsdevision);
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
      });
    });
  }

  addFarm(){
    this.farmService.addFarm(this.farm).then(() => {
      this.router.navigateByUrl('/tabs/farmhouse');
      this.farm.farmName = '';
      this.farm.farmRegNo = '';
      this.farm.ownerName = '';
      this.farm.veterinarianDivision='';
      this.farm.GSDivision= '';
      this.farm.address= '';
      this.farm.contactNo= '';
      this.farm.cattleCount= '';
      this.farm.dairyCattleCount= '';
    }, err => {
    });
  }

}
