import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'items', 
    loadChildren: () => import('./item-list/item-list.module').then(m => m.ItemListModule) 
  }, 
  { 
    path: 'basket', 
    loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
