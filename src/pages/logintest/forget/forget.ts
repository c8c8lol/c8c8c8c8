import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import firebase from 'firebase';

@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html'
})
export class ForgetPage {
  
  private email;
 
  constructor(public navCtrl: NavController, 
              private navParams: NavParams,
              private alertCtrl: AlertController) {
				  
    this.email = "";
  }
  
  private sendEmail(){
    var auth = firebase.auth();
    var emailAddress = this.email;
    var send : boolean;
    
    firebase.auth().useDeviceLanguage();
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
      alert("寄出!!\n" + "請到" + emailAddress + "重設密碼。");
      send = true;
    }).catch(function(error) {
      // An error happened.
      console.log(error);
      alert("錯誤!!\n" + "Email格式錯誤或沒有註冊。");
      send = false;
    });

    if(send == true)
      this.navCtrl.pop();
  }
  
}