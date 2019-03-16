import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CorreiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-correios',
  templateUrl: 'correios.html',
})
export class CorreiosPage {

  txtCidade:string;
  txtEstado:string;
  txtLogradouro:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  exibeInputs(){
    console.log(`Cidade:${this.txtCidade}`);
    console.log(`Cidade:${this.txtEstado}`);
    console.log(`Cidade:${this.txtLogradouro}`);
    this.txtCidade = "";
  }



}
