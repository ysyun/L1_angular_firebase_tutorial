import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalPage } from '../pages/modal/modal';
import { AddModalPage } from './../pages/add-modal/add-modal';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig, firebaseGoogleAuthentication } from '../firebase.config';
import { NavComponent } from '../pages/components/nav/nav.components';
import { ModifyComponent } from './../pages/components/modify/modify.component';

import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Tab1Page,
    Tab2Page,
    TabsPage,
    ModalPage,
    AddModalPage,
    NavComponent,
    ModifyComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'push',
      platform: {
        ios: {
          menuType: 'overlay'
        }
      }
    }),
    AngularFireModule.initializeApp(firebaseConfig, firebaseGoogleAuthentication)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Tab1Page,
    Tab2Page,
    TabsPage,
    ModalPage,
    AddModalPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera  
  ]
})
export class AppModule {}
