import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FarmService } from '../../services/farm.service';
import { Farm } from '../../models/Farm';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-farmhouse',
  templateUrl: './farmhouse.page.html',
  styleUrls: ['./farmhouse.page.scss'],
})
export class FarmhousePage implements OnInit {

  public farms: Observable<Farm[]>
  fid: string;
  term: '';
  userGSdevision :string;
 // farms = [];
  constructor(private farmService: FarmService, private router: Router) { 
   /* firebase.firestore().collection('farms').get().then(farmData => {
      farmData.forEach(childData => {
      
          this.farms.push(childData.data());
        
      });
    });*/
    this.userGSdevision = sessionStorage.getItem('gsdevision');
  }

  ngOnInit(): void {
   this.farms = this.farmService.getFarms();
  }

  gotomore(farmId){
    sessionStorage.setItem('farmId', farmId);
  //  this.router.navigateByUrl('/chat');
  }
}
