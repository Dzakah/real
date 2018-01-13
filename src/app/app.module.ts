import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GalleryPage } from '../pages/gallery/gallery';
import { TwoBedPage } from '../pages/two-bed/two-bed';
import { ThreeBedPage } from '../pages/three-bed/three-bed';
import { FourBedPage } from '../pages/four-bed/four-bed';
import { MansionPage } from '../pages/mansion/mansion';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GalleryPage,
    TwoBedPage,
    ThreeBedPage,
    FourBedPage,
    MansionPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GalleryPage,
    TwoBedPage,
    ThreeBedPage,
    FourBedPage,
    MansionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
