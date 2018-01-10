import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-scheDetail',
  templateUrl: 'scheDetail.html'
})
export class ScheDetailPage {
  private sche: any;
  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private viewCtrl: ViewController,) {
    this.sche = this.navParams.get('param1');
  }

  private back(){
    this.viewCtrl.dismiss();
  }

}
