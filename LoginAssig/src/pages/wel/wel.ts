import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wel',
  templateUrl: 'wel.html',
})
export class WelPage {


  name:string; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelPage');
  }

}
