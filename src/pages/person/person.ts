import { Component } from '@angular/core';

import { AlertController, NavController, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { Profile } from './../../models/profile';


@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class PersonPage {
  username: string;
  profileData = {} as Profile;

  constructor(private fire: AngularFireAuth, public alertCtrl: AlertController,
    public nav: NavController) {

  }
  ionViewDidLoad() {
    this.fire.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
        const personRef: firebase.database.Reference = firebase.database().ref(`profile/${data.uid}`);
        personRef.on('value', personSnapshot => {
          this.profileData = personSnapshot.val();
          console.log(this.profileData);
        });
      }

    })

  }



  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.getUsername();
      }
    });

    alert.present();
  }

  getUsername() {
    
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  changePhone() {
    console.log('Clicked to change phone number');
  }

  logout() {
    window.location.reload();
  }

  changeEmail() {
    console.log('Clicked to change mail');
  }
}
