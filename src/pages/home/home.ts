import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HerosPage } from '../heros/heros';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  value = "イベント";
  msg = "";
  someone = "fujimoto";
  title = "Tour of Heros";

  constructor(public navCtrl: NavController) {

  }
  show(e:any):void {
    this.msg = new Date().toLocaleString();
    console.log(e);
  }

  onClick():void{
    this.navCtrl.push(HerosPage);
  }

}
