import { AddModalPage } from './../add-modal/add-modal';
import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding } from 'ionic-angular';

import { ModalPage } from '../modal/modal';
import { ModalController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html'
})
export class Tab2Page {

  items: Array<any>;
  firebaseItems: FirebaseListObservable<any>;
  userUID: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private angularFire: AngularFire
  ) { }

  ionViewDidLoad() {
    this.angularFire.auth.subscribe(data => {
      if(data) {
        this.userUID = data.auth.uid;
        // 사용자별 collection 생성
        this.firebaseItems = this.angularFire.database.list('/items/' + this.userUID);
      }
      // this.firebaseItems = this.angularFire.database.list('/items');

      this.firebaseItems.subscribe(items => {
        if (items.length === 0) {
          this.firebaseItems.push({ name: 'angular', url: 'https://angular.io' });
          this.firebaseItems.push({ name: 'react', url: 'https://react.io' });
          this.firebaseItems.push({ name: 'vue.js', url: 'https://vue.io' });
        } else {
          this.items = items;
        }
      });
    });
  }

  moreInfo(dom: ItemSliding, item: any) {
    let modalpage = this.modalCtrl.create(ModalPage, { siteInfo: item });
    modalpage.present();
    modalpage.onWillDismiss(() => dom.close());
    modalpage.onDidDismiss((data: any) => {
      if (data) {
        data.$key = item.$key;
        this._saveItem(data);
      }
    });

    this.firebaseItems.update(item.$key, {
      viewCount: item.viewCount ? item.viewCount + 1 : 1
    }).then(_ => console.log('update successfully'));
  }

  deleteInfo(dom: ItemSliding, item: any) {
    this.firebaseItems.remove(item.$key).then(_ => console.log('remove successfully'));
  }

  addSite(): void {
    const addpage = this.modalCtrl.create(AddModalPage);
    addpage.present();
    addpage.onDidDismiss(data => {
      this._saveItem(data);
    });
  }

  _saveItem(item: any) {
    if (item.state === 'add') {
      item.item.viewCount = 0;
      this.firebaseItems.push(item.item);
    } else {
      this.firebaseItems.update(item.$key, item.item);
    }
  }

}
