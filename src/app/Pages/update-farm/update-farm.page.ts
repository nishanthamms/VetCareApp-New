import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Farm } from '../../models/Farm';
import { FarmService } from '../../services/farm.service';

@Component({
  selector: 'app-update-farm',
  templateUrl: './update-farm.page.html',
  styleUrls: ['./update-farm.page.scss'],
})
export class UpdateFarmPage implements OnInit {
  fid;
  farm: Farm = {
    id: sessionStorage.getItem('farmId'),
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

  constructor(private activatedRoute: ActivatedRoute,
    private farmService: FarmService,
    private router: Router) {
      this.fid =  sessionStorage.getItem('farmId');
     }

  ngOnInit() {
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.farmService.getFarm(id).subscribe(farmData => {
        this.farm = farmData;
      });
    }
  }

  updateFarm(){
    this.farmService.updateFarm(this.farm).then(() => {
      this.router.navigateByUrl('/tabs/view-farm/' + this.fid);
    }, err =>{
    });
  }

  goback(){
   
    this.router.navigateByUrl('/tabs/view-farm/' + this.fid);
   }
}
