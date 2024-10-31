
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
  imports:[CommonModule],
  standalone:true
})
export class ToolsComponent   {


data;
  cartService: any;


constructor(private _ApiService: ApiService) {
this.data= this._ApiService.tools_products;

}
addToCart(product: any): void {
  this.cartService.addToCart(product); // Add product to the cart
  // alert(`${product.brand} has been added to your cart!`); // Optional: Alert the user
}
}
