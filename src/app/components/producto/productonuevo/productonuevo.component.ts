import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-productonuevo',
  templateUrl: './productonuevo.component.html',
  styleUrls: ['./productonuevo.component.css']
})
export class ProductonuevoComponent implements OnInit {
  item:Producto=new Producto();
  seccion='producto';
  constructor(private dbProd:ProductoService,
      private router:Router
    ) { }

  ngOnInit(): void {
  }
  enviar(){
    this.dbProd.add(this.item).then(a=>{
      console.log("datos server",a);
    });
    Swal.fire({ title: 'Datos guardados',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {}
        this.router.navigate(['/'+this.seccion]);
    });
    
  } 
  salir(){}
}
