import { AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyD-hNyJ895GY9hRjPWQn0lYi0cg1TxRGcI",
    authDomain: "ionictest-768ba.firebaseapp.com",
    databaseURL: "https://ionictest-768ba.firebaseio.com",
    storageBucket: "ionictest-768ba.appspot.com",
    messagingSenderId: "569064664992"
};

export const firebaseGoogleAuthentication = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

export const firebaseGithubAuthentication = {
  provider: AuthProviders.Github,
  method: AuthMethods.Popup
}

