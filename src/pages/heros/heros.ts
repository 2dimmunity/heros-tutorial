import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HEROS } from '../../assets/data/mock-heros';
import { Hero } from '../../interface/hero';
/**
 * Generated class for the HerosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heros',
  templateUrl: 'heros.html',
})
export class HerosPage {
  heros: Hero[] = HEROS;
  selectedHero: Hero;
    
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HerosPage');
  }

  onSelect(hero : Hero) :void{
    this.selectedHero = hero;
  }

}
