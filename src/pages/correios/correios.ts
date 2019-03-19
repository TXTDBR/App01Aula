import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CorreiosProvider } from '../../providers/correios/correios';

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
  providers: [
    CorreiosProvider
  ]
})
export class CorreiosPage {

  txtCidade:string;
  txtEstado:string;
  txtLogradouro:string;
  enderecos:any = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private cProvider: CorreiosProvider) {
  }

  ionViewDidLoad() {
    
  }

  listaEnderecos(){
    this.cProvider.getEnderecos(this.txtEstado, this.txtCidade, this.txtLogradouro).subscribe(
      data =>{
       // let rs = (data as any)._body;
        //let rsJson = JSON.parse(rs);
        //console.log(data);
        this.enderecos = data;
      }, error =>{
        console.log(error);
        
      }
    );
  }



}
