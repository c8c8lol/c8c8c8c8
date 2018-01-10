import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Post } from './../../models/post';

import { Subscription } from 'rxjs/Subscription'; //use to unsubscript while leaving the page

/**
 * Generated class for the EditPostItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-edit-post-item',
  templateUrl: 'edit-post-item.html',
})
export class EditPostItemPage {
  postItemSubscription: Subscription;

  postItemRef$: FirebaseObjectObservable<Post>;
  postItem = {} as Post;

  constructor(private db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {

      //capture the postItemId as a NavParameter
      const postItemId = this.navParams.get('postItemId');

      //log out the navParam
      console.log(postItemId);

      this.postItemRef$ = this.db.object(`post-list/${postItemId}`);
      //subscribe to the object and assign the result to this.postItem
      this.postItemSubscription =
      this.postItemRef$.subscribe(
        postItem => this.postItem = postItem);
  }

  editPostItem(postItem: Post){
    this.postItemRef$.update(postItem);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    //unsubscribe from the observable while leaving the page
    this.postItemSubscription.unsubscribe();
  }
  //async pipe: Subscription and unsubscription is handled automatically by angular
}
