import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosdetallesPageRoutingModule } from './productosdetalles-routing.module';

import { ProductosdetallesPage } from './productosdetalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosdetallesPageRoutingModule
  ],
  declarations: [ProductosdetallesPage]
})
export class ProductosdetallesPageModule {}
