import { Routes } from "@angular/router";
import { ProductoComponent } from "src/app/components/producto/producto.component";

export const AdminLayoutRoutes:Routes=[
    {
        path:'producto',
        component:ProductoComponent
    }
]