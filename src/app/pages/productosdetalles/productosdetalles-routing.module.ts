import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosdetallesPage } from './productosdetalles.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosdetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosdetallesPageRoutingModule {}
