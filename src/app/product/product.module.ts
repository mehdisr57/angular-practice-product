import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule} from "@angular/forms";
import { ProductShowComponent } from './product-show/product-show.component';


@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    ProductShowComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
