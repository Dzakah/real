import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TwoBedPage } from '../two-bed/two-bed';
import { ThreeBedPage } from '../three-bed/three-bed';
import { FourBedPage } from '../four-bed/four-bed';
import { FiveBedPage } from '../five-bed/five-bed';
import { MansionPage } from '../mansion/mansion';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  Twobed(){
    this.navCtrl.push(TwoBedPage);
  }

  Threebed(){
    this.navCtrl.push(ThreeBedPage);
  }
  
  Fourbed(){
    this.navCtrl.push(FourBedPage);
  }
  Fivebed(){
    this.navCtrl.push(FiveBedPage);
}
  Mansion(){
    this.navCtrl.push(MansionPage);
  }
}
