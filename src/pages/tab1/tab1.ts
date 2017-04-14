import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})
export class Tab1Page {

  items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  ionViewDidLoad() {
    this._setItems();
  }

  _setItems() {
    this.items = ['test1', 'test2', 'test3']
  }

}
