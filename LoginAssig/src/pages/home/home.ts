import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelPage } from "../wel/wel";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name:string;
  pass:string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  

  login(){
    if(this.pass == "AbC"){
      this.navCtrl.push(WelPage,{data:this.name});
    }
    else if(this.pass != "AbC"){
      const alert = this.alertCtrl.create({
        title: 'User!',
        subTitle: 'Password is wrong',
        buttons: ['OK']
      });
      alert.present();
    }
    else{      
        const alert = this.alertCtrl.create({
          title: 'User!',
          subTitle: 'Fill the login feilds',
          buttons: ['OK']
        });
        alert.present();
    }
  }
    
  

}
