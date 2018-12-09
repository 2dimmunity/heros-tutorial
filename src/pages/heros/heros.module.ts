import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HerosPage } from './heros';

@NgModule({
  declarations: [
    HerosPage,
  ],
  imports: [
    IonicPageModule.forChild(HerosPage),
  ],
})
export class HerosPageModule {}
