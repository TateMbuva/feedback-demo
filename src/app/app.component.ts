import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { Device } from '@ionic-native/device';

//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { SlidesPage } from '../pages/slides/slides';
import { SurveysPage } from '../pages/surveys/surveys';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SurveysPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private keyboard: Keyboard, private device: Device) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Surveys', component: SurveysPage },
      { title: 'Slides', component: SlidesPage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      console.log(this.device.platform);

      if( this.device.platform == "iOS")
        {
         this.statusBar.overlaysWebView(true);
         this.statusBar.hide();
        }

        this.keyboard.disableScroll(true);
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
