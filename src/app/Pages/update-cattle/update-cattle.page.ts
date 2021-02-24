import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CattleService } from '../../services/cattle.service';
import { Cattle } from '../../models/Cattle';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-update-cattle',
  templateUrl: './update-cattle.page.html',
  styleUrls: ['./update-cattle.page.scss'],
})
export class UpdateCattlePage implements OnInit {

   // Upload Task
   task: AngularFireUploadTask;

   // Progress in percentage
   percentage: Observable<number>;
 
   // Snapshot of uploading file
   snapshot: Observable<any>;
 
   // Uploaded File URL
   UploadedFileURL: Observable<string>;
 
   // Uploaded Image List
   // images: Observable<MyData[]>;
 
   // File details
   fileName: string;
   fileSize: number;
 
   // Status check
   isUploading: boolean;
   isUploaded: boolean;

  ctid;
  cattle: Cattle = {
    id:sessionStorage.getItem('cattleTagId'),
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
    cattleImg: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage,
    private cattleService: CattleService) { 
      this.ctid =  sessionStorage.getItem('cattleTagId');
      this.isUploading = false;
      this.isUploaded = false;
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.cattleService.getCattle(id).subscribe(cattleData => {
        this.cattle = cattleData;
      });
    }
  }

  updateMyDate($event) {
    // console.log($event); // --> wil contains $event.day.value, $event.month.value and $event.year.value
     this.cattle.lastCalvingDate =  this.cattle.lastCalvingDate.split('T')[0]; 
     this.cattle.cattleDOB =  this.cattle.cattleDOB.split('T')[0];   
   }
   
  
  updateCattle(){
    this.cattleService.updateCattle(this.cattle).then(() => {
      this.router.navigateByUrl('/tabs/view-cattle/' + this.ctid);
    }, err =>{
    });
  }
  uploadFile(event: FileList) {

    // The File object
    const file = event.item(0);

    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') {
     console.error('unsupported file type :( ');
     return;
    }

    this.isUploading = true;
    this.isUploaded = false;


    this.fileName = file.name;

    // The storage path
    const path = `CattleStorage/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'image Upload Demo' };

    // File reference
    const fileRef = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(

      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();

        this.UploadedFileURL.subscribe(resp => {
         /* this.addImagetoDB({
            name: file.name,
            filepath: resp,
            size: this.fileSize
          });*/
          this.cattle.cattleImg = resp;
        //  console.log(this.cattle.cattleImg);
          this.isUploading = false;
          this.isUploaded = true;
        }, error => {
          console.error(error);
        });
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    );
  }
  goback(){
    
    this.router.navigateByUrl('/tabs/view-cattle/' + this.ctid);
   }
}
