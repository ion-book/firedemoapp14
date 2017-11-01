import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FirebaseDynamicLinks , DynamicLinksOptions} from '@ionic-native/firebase-dynamic-links';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private firebaseDynamicLinks: FirebaseDynamicLinks) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    // The deepLink and callToActionText properties are optional
let options: DynamicLinksOptions = {
  title: 'My Title',
  message: 'My message'
};

this.firebaseDynamicLinks.sendInvitation(options)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

this.firebaseDynamicLinks.onDynamicLink()
  .then((res: any) => console.log(res)) //Handle the logic here after opening the app with the Dynamic link
  .catch((error:any) => console.log(error));
  }
}

