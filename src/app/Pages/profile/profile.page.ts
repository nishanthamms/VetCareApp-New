import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Compiler } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController} from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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
  
    userImg;


  /*darkval: boolean = false;
  showtheme: boolean = false;
  myphoto: any;*/
  public userProfile: UserProfile;

  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    public themeService: ThemeService,
    private actionSheetCtrl: ActionSheetController,
    public alertController: AlertController,
    private _compiler: Compiler,
    private storage: AngularFireStorage,
    private navController: NavController,
    private camera: Camera) {
      this.isUploading = false;
      this.isUploaded = false;
    }

  ngOnInit() {
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
      });
    });
  }

  /*toggleDarkMode(){
    this.themeService.toggleAppTheme();
  }

  toggletheme(){
    this.showtheme = !this.showtheme;
  }*/

  async showActionSheet(){
    await this.actionSheetCtrl.create({
      // cssClass: "add-propic",
      // header: 'Upload profile picture',
      buttons: [
        {
          text: "Take from Gallery",
          icon: "folder",
          handler: () => {
            console.log("Gallery clicked")
            this.uploadFile;
          }
        },
        /*{
          // text: "Take Photo on Camera",
          icon: 'camera',
          cssClass: 'add-propic',
          handler: () => {
            console.log('Camera clikced ');
            this.takePhoto();
          }
        },
        {
          // text: "Take Photo on Camera",
          icon: 'trash',
          cssClass: 'add-propic',
          handler: () => {
            console.log('Camera clikced ');
            this.presentAlertConfirm();
          }
        },*/
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    }).then(res => res.present());
  }

  /*getImage(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Delete',
      message: '<strong>Remove profile photo</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Remove',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
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
    const path = `UserStorage/${new Date().getTime()}_${file.name}`;

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
          this.userImg = resp;
          this.profileService.updateProfImg(this.userImg);
          // console.log(this.cattle.cattleImg);
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
  
  async logOut(): Promise<void> {
    await this.authService.logout();
    localStorage.clear();
   // $window.localStorage.clear();
    // ionicHistory.clearCache();
   // $ionicHistory.clearHistory();
    this.router.navigateByUrl('login');
  }
  /*navigateToLogin(){
    this.router.navigate(['login'])
  }
  Edit(){
    this.router.navigate(['/tabs/edit-profile'])
  }
  ChangePassword(){
    this.router.navigate(['/tabs/change-password'])
  }
  About(){
    this.router.navigate(['/tabs/about'])
  }*/

}
