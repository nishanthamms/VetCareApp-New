import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreedingService } from '../../services/breeding.service';
import { Breeding } from 'src/app/models/breeding';

@Component({
  selector: 'app-add-breeding',
  templateUrl: './add-breeding.page.html',
  styleUrls: ['./add-breeding.page.scss'],
})
export class AddBreedingPage implements OnInit {
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

  constructor(private breedingService: BreedingService,
    private router: Router) {
      this.ctid =  sessionStorage.getItem('cattleTagId');
     }

  ngOnInit() {
  }
  updateMyDate($event) {
    // console.log($event); // --> wil contains $event.day.value, $event.month.value and $event.year.value
     this.breeding.dateOfHeatObserved =  this.breeding.dateOfHeatObserved.split('T')[0]; 
     this.breeding.dateOfFirstAI =  this.breeding.dateOfFirstAI.split('T')[0]; 
     this.breeding.dateOfSecondAI =  this.breeding.dateOfSecondAI.split('T')[0]; 
     this.breeding.dateOfPD =  this.breeding.dateOfPD.split('T')[0]; 
     this.breeding.dateOfLastCalving =  this.breeding.dateOfLastCalving.split('T')[0]; 

   }
  addBreeding(){
    this.breedingService.addBreeding(this.breeding).then(() => {
      this.router.navigateByUrl('/tabs/view-breeding/' + this.ctid);
      this.breeding.dateOfHeatObserved= '',
      this.breeding.dateOfFirstAI= '',
      this.breeding.dateOfSecondAI= '',
      this.breeding.semanId= '',
      this.breeding.dateOfPD= '',
      this.breeding.dateOfLastCalving= '',
      this.breeding.noOfCalving= '',
      this.breeding.AIReceiptNo= ''
    }, err => {
    });
  }
  goback(){
    
    this.router.navigateByUrl('/tabs/view-cattle/' + this.ctid);
   }
}
 