import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } 
from '@angular/fire/database';
import { AngularFirestore } from "@angular/fire/firestore";
import { Producto } from '../model/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private dbpath='Producto';
  //ProductoRef:AngularFireList<Producto>;
  constructor(///private db: AngularFireDatabase,
        private dbb:AngularFirestore
    ) { 
    //this.ProductoRef=db.list(this.dbpath);
  }
  getAll()
  {
    return this.dbb.collection<Producto>(this.dbpath);
  }
  add(prod:Producto)
  {
    console.log(prod);
    return this.dbb.collection<Producto>(this.dbpath).doc().set(Object.assign({},prod));
  }

}
