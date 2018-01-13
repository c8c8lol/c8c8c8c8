import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditPersonPage } from '../edit-person/edit-person';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private secret = 'lalala';
  constructor() {}
  
  getSecret(){
    return this.secret;
  }
  
}
