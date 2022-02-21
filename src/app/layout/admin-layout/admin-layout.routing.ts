import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductoComponent } from "src/app/components/producto/producto.component";
import {  RouterModule } from '@angular/router';
import { ProductonuevoComponent } from "src/app/components/producto/productonuevo/productonuevo.component";
import { PedidoComponent } from "src/app/components/pedido/pedido.component";
//export 
const AdminLayoutRoutes:Routes=[
    {
        path:'producto',
        component:ProductoComponent
    },
    {
        path:'productoform',
        component:ProductonuevoComponent
    },
    {
        path:'productoform/:id',
        component:ProductonuevoComponent
    },
    {
        path:'pedidos',
        component:PedidoComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutesR{}