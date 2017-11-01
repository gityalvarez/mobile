import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

productos: any;


  constructor(public navCtrl: NavController, public restapiService: RestapiServiceProvider) {
  this.getProductos();

  }


getProductos() {
  this.restapiService.getProductos()
  .then(data => {
    this.productos = data;
    console.log(this.productos);
  });
}


}
