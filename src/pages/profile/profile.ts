import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  email: String;

  // Injeção de dependencias 
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser(); //se existir este localUser a variavél estara valendo
    if (localUser && localUser.email) { // testo se o localUser possui um email 
      this.email = localUser.email; //email exitindo eu chamo o proprio email
    }
  }

}
