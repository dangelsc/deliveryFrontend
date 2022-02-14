import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  lista:Producto[] = [];
  constructor(private Producto:ProductoService ) { }

  ngOnInit(): void {
    console.log("iniciado consulta");
    this.Producto.getAll().snapshotChanges().subscribe(
      serve=>{
        this.lista=
        serve.map(item=>{
        //  console.log(item.payload.doc.id);
          //console.log(item.payload.doc.data());
          
          return Object.assign(
            //new  Producto(
            { 
              key:item.payload.doc.id,
              nombre:item.payload.doc.data().nombre,
              descripcion:item.payload.doc.data().descripcion,
              precio:item.payload.doc.data().precio,
              foto:item.payload.doc.data().foto
            }
          );

        })
        console.log("Datos del servidor firebase",this.lista);
      }
    )
  }

}
