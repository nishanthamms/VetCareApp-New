import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiseaseService } from '../../services/disease.service';
import { Disease } from 'src/app/models/disease';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.page.html',
  styleUrls: ['./add-disease.page.scss'],
})
export class AddDiseasePage implements OnInit {

  ctid;
  disease: Disease = {
    cattleid: sessionStorage.getItem('cattleTagId'),
    //veterinarianId: '',
    userid: localStorage.getItem('userid'),
    date: '',
    clinicalSigns: '',
    typeOfClinicalSigns: '',
    diagnosis: '',
    treatment: '',
    remarks: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private diseaseService: DiseaseService) {
      this.ctid =  sessionStorage.getItem('cattleTagId');
     }

  ngOnInit() {
  }

  updateMyDate($event) {
    // console.log($event); // --> wil contains $event.day.value, $event.month.value and $event.year.value
     this.disease.date =  this.disease.date.split('T')[0]; 
   }
   
  addDisease(){
    this.diseaseService.addDisease(this.disease).then(() => {
      this.router.navigateByUrl('/tabs/view-disease/' + this.ctid);
      this.disease.date = '';
      this.disease.clinicalSigns= '';
      this.disease.typeOfClinicalSigns= '';
      this.disease.diagnosis= '';
      this.disease.treatment= '';
      this.disease.remarks= '';
    }, err => {
    });
  }

  goback(){
    this.router.navigateByUrl('/tabs/view-cattle/' + this.ctid);
   }
}
