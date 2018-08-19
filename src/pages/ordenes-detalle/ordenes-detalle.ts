import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

import { CarritoService } from "../../providers/carrito";

@Component({
  selector: 'page-ordenes-detalle',
  templateUrl: 'ordenes-detalle.html',
})
export class OrdenesDetallePage {

  orden:any = {}

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl:AlertController,
              private viewCtrl: ViewController,
              private _cs:CarritoService ) {

    this.orden = this.navParams.get("orden");

  }

  borrar_orden( orden_id:string ){
    this._cs.borrar_orden(orden_id)
    .subscribe ( data =>{
      if(data.error){
        this.alertCtrl.create({
          title: "Error al borrar",
          subTitle: data.mensaje,
          buttons: ["OK"]
        }).present();
      }
      else{
        this.navCtrl.pop();
        this.alertCtrl.create({
          title: "Orden borrada",
          subTitle: "Su pedido sera cancelado",
          buttons: ["OK"]
        }).present();
      }
    });

  }


}
