import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AdminLayoutmodule } from './layout/admin-layout/admin-layout.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './layout/menu/menu.component';
import { MenuModule } from './layout/menu/menu.module';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    //ProductoComponent,
    //MenuComponent
  ],
  imports: [
    BrowserModule,
    AdminLayoutmodule,   
    RouterModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
