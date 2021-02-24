import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { Cattle } from 'src/app/models/Cattle';
import { CattleService } from '../../services/cattle.service';
import { FarmService } from '../../services/farm.service';
import { Farm } from 'src/app/models/Farm';
import * as firebase from 'firebase';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Compiler } from '@angular/core';
import { FormGroup } from '@angular/forms';
import{NavController} from '@ionic/angular';
@Component({
  selector: 'app-add-cattle',
  templateUrl: './add-cattle.page.html',
  styleUrls: ['./add-cattle.page.scss'],
})
export class AddCattlePage implements OnInit {

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

  fid;
  hello = 7;
  cattle: Cattle= {
    farmid: sessionStorage.getItem('farmId'),
    cattleTagId: '',
    cattleBreed: '',
    cattleDOB: '',
    specialFeature: '',
    sex: '',
    noLactation:'',
    birthWeg:'',
    breedingWeg: '', 
    cattleWeaningWeg: '',
    avgPreWeg: '',
    avgPostWeg: '',
    lastCalvingDate: '',
    cattleImg: ''
  }

  public farm: Farm;

  constructor(private actionSheetCtrl: ActionSheetController,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private cattleService: CattleService,
    private _compiler: Compiler,
    private storage: AngularFireStorage,
    private navController:NavController,
    private farmService: FarmService) { 
      this.fid =  sessionStorage.getItem('farmId');
      this.cattle.lastCalvingDate =  this.cattle.lastCalvingDate.split('T')[0]; 
     // console.log(dateFormat);
     // this.cattle.lastCalvingDate.toLocaleFormat('%Y-%m-%d');
     this.isUploading = false;
     this.isUploaded = false;
    }

  ngOnInit() {
    /*this.farmService.getFarms().then(farm$ => {
      farm$.subscribe(farm => {
        this.farm = farm;
      });
    });*/

  }
  
  updateMyDate($event) {
   // console.log($event); // --> wil contains $event.day.value, $event.month.value and $event.year.value
    this.cattle.lastCalvingDate =  this.cattle.lastCalvingDate.split('T')[0]; 
    this.cattle.cattleDOB =  this.cattle.cattleDOB.split('T')[0];   
  }
  
  addCattle(){
    
    this.cattleService.addCattle(this.cattle).then(() => {
      this.router.navigateByUrl('/tabs/view-farm/' + this.fid );
      this.cattle.cattleBreed = '';
      this.cattle.cattleTagId= '';
      this.cattle.cattleDOB= '';
      this.cattle.specialFeature= '';
      this.cattle.sex= '',
      this.cattle.noLactation= '';
      this.cattle.birthWeg= '';
      this.cattle.breedingWeg= '';
      this.cattle.cattleWeaningWeg= '';
      this.cattle.avgPreWeg= '';
      this.cattle. avgPostWeg= '';
      this.cattle.lastCalvingDate= '';
      this.cattle.cattleImg= '';
    }, err => {

    });
  }
 
  async showActionSheet(){
    await this.actionSheetCtrl.create({
      //header: 'Add New Informations',
      buttons:[
        {
          text: "Take from Gallery",
          icon: "folder",
          handler: () => {
            console.log("Gallery clicked")
            this.uploadFile;
          }
        },
       /* {
          text: "Take Photo on Camera",
          icon: "camera",
          handler: () => {
            console.log("Camera clikced ")
          //  this.takePhoto();
          }
        },*/
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    }).then(res => res.present());  
  }
/*
  getImage(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
      var base64Str = 'data:image/jpeg;base64,'+imageData;
      var storageRef = firebase.storage().ref();
      var childRef = storageRef.child('firebasestorage.jpg');
      childRef.putString(base64Str, 'data_url').then(function(snapshot){
        alert("Successfully uploaded...");
      });
    }, (Err) => {
      alert(JSON.stringify(Err));
    })
  }

  takePhoto(){
    var options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      var base64Str = 'data:image/jpeg;base64,'+imageData;
      var storageRef = firebase.storage().ref();
      var childRef = storageRef.child('firebasestorage.jpg');
      childRef.putString(base64Str, 'data_url').then(function(snapshot){
        alert("Successfully uploaded...");
      });
    }, (Err) => {
      alert(JSON.stringify(Err));
    })
  }*/


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
    
    this.router.navigateByUrl('/tabs/view-farm/' + this.fid);
   }
}
