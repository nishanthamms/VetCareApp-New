import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiseaseService } from '../../services/disease.service';
import { Disease } from 'src/app/models/disease';

@Component({
  selector: 'app-update-disease',
  templateUrl: './update-disease.page.html',
  styleUrls: ['./update-disease.page.scss'],
})
export class UpdateDiseasePage implements OnInit {

  ctid;
  disease: Disease = {
    cattleid:  sessionStorage.getItem('cattleTagId'),
    //veterinarianId: '',
    userid: '',
    date: '',
    clinicalSigns: '',
    typeOfClinicalSigns: '',
    diagnosis: '',
    treatment: '',
    remarks: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
    private diseaseService: DiseaseService,
    private router: Router) { 
      this.ctid =  sessionStorage.getItem('cattleTagId');
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.diseaseService.getDisease(id).subscribe(diseaseData => {
        this.disease = diseaseData;
      });
    }
  }
  updateMyDate($event) {
    // console.log($event); // --> wil contains $event.day.value, $event.month.value and $event.year.value
     this.disease.date =  this.disease.date.split('T')[0]; 
   }
  updateDisease(){
    this.diseaseService.updateDisease(this.disease).then(() => {
      this.router.navigateByUrl('/tabs/view-disease/' + this.ctid);
    }, err =>{
    });
  }
  goback(){    
    this.router.navigateByUrl('/tabs/view-disease/' + this.ctid);
   }
}
 