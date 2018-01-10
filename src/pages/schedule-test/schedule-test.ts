import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Schedule } from './../../models/schedule';
import { GenSchedulePage } from '../gen-schedule/gen-schedule';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

/**
 * Generated class for the ScheduleTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-schedule-test',
  templateUrl: 'schedule-test.html',
})
export class ScheduleTestPage {
  scheItemRef$: FirebaseListObservable<Schedule[]>

  constructor(private db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      this.scheItemRef$ = this.db.list('sche-list');
  }

  showScheduleGenPage() {
    this.navCtrl.push(GenSchedulePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleTestPage');
  }

}
