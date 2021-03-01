import { Injectable } from '@angular/core';
import {FarmInfo} from '../models/FarmInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  /*notifiFarm: FarmInfo[] = [{
    id: 1,
    address: "sdsd",
    cattleTag: 'trtrt'
}];

public getStudents(): any {
  const studentsObservable = new Observable(observer => {
         setTimeout(() => {
             observer.next(this.notifiFarm);
         }, 1000);
  });

  return studentsObservable;
}*/
  constructor() { }
}
