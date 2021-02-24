import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreedingService } from '../../services/breeding.service';
import { Breeding } from 'src/app/models/breeding';

@Component({
  selector: 'app-update-breeding',
  templateUrl: './update-breeding.page.html',
  styleUrls: ['./update-breeding.page.scss'],
})
export class UpdateBreedingPage implements OnInit {

  ctid;
  breeding: Breeding = {
    cattleid: sessionStorage.getItem('cattleTagId'),
    dateOfHeatObserved: '',
    dateOfFirstAI: '',
    dateOfSecondAI: '',
    semanId: '',
    dateOfPD: '',
    dateOfLastCalving: '',
    noOfCalving: '',
    AIReceiptNo: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private breedingService: BreedingService) {
      this.ctid =  sessionStorage.getItem('cattleTagId');
     }

  ngOnInit() {
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.breedingService.getBreeding(id).subscribe(breedingData => {
        this.breeding = breedingData;
      });
    }
  }
  updateMyDate($event) {
    // console.log($event); // --> wil contains $event.day.value, $event.month.value and $event.year.value
     this.breeding.dateOfHeatObserved =  this.breeding.dateOfHeatObserved.split('T')[0]; 
     this.breeding.dateOfFirstAI =  this.breeding.dateOfFirstAI.split('T')[0]; 
     this.breeding.dateOfSecondAI =  this.breeding.dateOfSecondAI.split('T')[0]; 
     this.breeding.dateOfPD =  this.breeding.dateOfPD.split('T')[0]; 
     this.breeding.dateOfLastCalving =  this.breeding.dateOfLastCalving.split('T')[0]; 
   }
   
  updateBreeding(){
    this.breedingService.updateBreeding(this.breeding).then(() => {
      this.router.navigateByUrl('/tabs/view-breeding/' + this.ctid);
    }, err =>{
    });
  }
  goback(){    
    this.router.navigateByUrl('/tabs/view-breeding/' + this.ctid);
   }
}
