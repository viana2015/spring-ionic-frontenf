import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua xx",
        numero: "222",
        complemento: "teste",
        bairro: "Santa Monica",
        cep: "48293822",
        cidade: {
          id: "1",
          nome: "Uberlândia",
          estado: {
            id: "1",
            nome: "Minas Gerais"
          }
        }
      },

      {
        id: "2",
        logradouro: "Rua Bola",
        numero: "222",
        complemento: "teste",
        bairro: "Centro",
        cep: "48293822",
        cidade: {
          id: "3",
          nome: "São Paulo",
          estado: {
            id: "2",
            nome: "Minas Gerais"
          }
        }
      }
    ];
  }

}
