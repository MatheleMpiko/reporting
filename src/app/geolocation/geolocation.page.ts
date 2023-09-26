import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  lati: any = '';
  longi: any = '';
  address: string = ''; // To store the address

  constructor(
    private geolocation: Geolocation,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private nativeGeocoder: NativeGeocoder // Native Geocoder
  ) {}

  async ngOnInit() {
    await this.getCurrentLocation();
  }

  async getCurrentLocation() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();

    this.geolocation
      .getCurrentPosition({ maximumAge: 1000, timeout: 5000, enableHighAccuracy: true })
      .then(async (resp) => {
        this.lati = resp.coords.latitude;
        this.longi = resp.coords.longitude;

        // Reverse Geocoding
        const options: NativeGeocoderOptions = {
          useLocale: true,
          maxResults: 5,
        };

        this.nativeGeocoder
        .reverseGeocode(this.lati, this.longi, options)
        .then((result: NativeGeocoderResult[]) => {
          if (result && result.length > 0) {
            const firstResult = result[0];
            this.address = `${firstResult.subThoroughfare} ${firstResult.thoroughfare}, ${firstResult.locality}, ${firstResult.administrativeArea}, ${firstResult.countryName}`;
          } else {
            this.address = 'Address not found';
          }
        })
        .catch((error: any) => {
          console.error('Error fetching address:', error); // Log the error
          this.address = 'Error fetching address. Please check your network connection and API key.';
        });      

        loading.dismiss();
      })
      .catch((error) => {
        console.error(error);
        loading.dismiss();
        this.showLoader('Error getting location - ' + JSON.stringify(error));
      });
  }

  async showLoader(msg: string) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}



// import { Component, OnInit } from '@angular/core'; 
// import { Geolocation } from '@ionic-native/geolocation/ngx';  
// import { LoadingController } from '@ionic/angular';  
// import { AlertController } from '@ionic/angular';  

// @Component({
//   selector: 'app-geolocation',
//   templateUrl: './geolocation.page.html',
//   styleUrls: ['./geolocation.page.scss'],
// })
// export class GeolocationPage {
//   lati: any = '';  
//   longi: any = '';  
//   constructor(private geolocation: Geolocation, public loadingController: LoadingController, public alertController: AlertController) {  
  
//   } 

//   async getCurrentLocation() {  
//     const loading = await this.loadingController.create({  
//       message: 'Please wait...',  
//       });  
//     await loading.present();  
  
//     this.geolocation.getCurrentPosition({maximumAge: 1000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {  
//       // resp.coords.latitude  
//       // resp.coords.longitude  
//       loading.dismiss();  
//       this.lati = resp.coords.latitude;  
//       this.longi = resp.coords.longitude;  
//       }, er => {  
//         // alert("error getting location")  
//         console.error(er);
//         loading.dismiss();
//         this.showLoader('Can not retrieve Location');  
//       }).catch((error) => {  
//       // alert('Error getting location'+JSON.stringify(error));  
//       loading.dismiss();  
//       this.showLoader('Error getting location - ' + JSON.stringify(error));  
//       });  
//   }  
  
//  async showLoader(msg: string) {  
//     const alert = await this.alertController.create({  
//       message: msg,  
//       buttons: ['OK']  
//     });  
  
//     await alert.present();  
//   }  

// }
