import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductoComponent } from "src/app/components/producto/producto.component";
import { AdminLayoutRoutes } from "./admin-layout.routing";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        //RouterModule
    ],
    declarations: [
        ProductoComponent
    ]
})
export class AdminLayoutmodule{}