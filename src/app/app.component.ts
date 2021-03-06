import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { Storage } from '@ionic/storage';

//import { TabsPage } from '../pages/tabs/tabs';
//import { LoginPage } from '../pages/login/login';
import { LogintestPage } from '../pages/logintest/logintest';

//import { ConferenceData } from '../providers/conference-data';
//import { UserData } from '../providers/user-data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LogintestPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
