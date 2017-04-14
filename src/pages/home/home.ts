import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { firebaseGoogleAuthentication, firebaseGithubAuthentication } from '../../firebase.config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'HOME';
  isProcessing: boolean = true;
  isLogin: boolean = false;
  userUID: string;
  userName: string;

  constructor(public navCtrl: NavController, private angularFire: AngularFire) {}

  ngOnInit(): void {
    this.angularFire.auth.subscribe((data) => {
      if(data) {
        this.userUID = data.auth.uid;
        this.userName = data.auth.displayName;
        this.isLogin = true;
      }
      else {
        this.userUID = undefined;
        this.userName = undefined;
        this.isLogin = false;
      }
      this.isProcessing = false;
    });
  }

  doLogout(): void {
    this.angularFire.auth.logout();
  }

  doLogin(provider: string): void {
    const loginConfig = (provider === 'google') ? firebaseGoogleAuthentication : firebaseGithubAuthentication;
    // 동적으로 로그인 provider를 설정할 수 있다
    this.angularFire.auth.login(loginConfig);
  }

}
