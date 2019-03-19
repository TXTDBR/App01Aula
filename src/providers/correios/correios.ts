import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CorreiosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CorreiosProvider {
  public  URLBASE:string = "https://viacep.com.br/ws/";
  constructor(public http: HttpClient) {
    
  }
  public getEnderecos(uf:string, cidade:string, logradouro:string){
    return this.http.get(this.URLBASE+ uf + "/"+ cidade +"/"+logradouro+"/json/");
  }
}
