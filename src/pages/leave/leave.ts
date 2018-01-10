import { Component, ViewChild } from '@angular/core';
import { AlertController, App, FabContainer, ItemSliding, List, ModalController, NavController, ToastController, LoadingController, Refresher } from 'ionic-angular';
import { LeaveFormPage } from '../../pages/leave-form/leave-form';
//import { AlertController } from 'ionic-angular';
//import { AlertController, App, FabContainer, ItemSliding, List, ModalController, NavController, ToastController, LoadingController, Refresher } from 'ionic-angular';
// leave-detail(SessionDetailPage)

@Component({
  selector: 'page-leave',
  templateUrl: 'leave.html'
})
export class LeavePage {
  @ViewChild('leaveList', { read: List }) leaveList: List;

  items: any[] = [];
  confDate: string;
  segment = 'all';
  shownSessions: any = [];

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
  ) {}

  ionViewDidLoad() {
  }


  updateLeave() {
    // Close any open sliding items when the schedule updates
    this.leaveList && this.leaveList.closeSlidingItems();

  }

  showLeaveForm() {
    this.navCtrl.push(LeaveFormPage);
}

}
