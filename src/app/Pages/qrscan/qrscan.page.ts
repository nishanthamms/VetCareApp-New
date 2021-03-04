import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
})
export class QrscanPage implements OnInit {

  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner, private router: Router) {
    this.encodeData = "";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
       // alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
        //return this.scannedData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  viewCatlle(){
   
    var arr = this.scannedData["text"];
    var arr1= arr.toString().split("=");   
    this.router.navigateByUrl('/tabs/view-cattle/' + arr1[1].toString());
  }
  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }

  ngOnInit() {
   //var arr = "id = 12234";
  // var arr1= arr.toString().split("="); 
   //console.log(arr1[1]);  
  }

}
