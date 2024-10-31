
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api4.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-Other',
  templateUrl: './Other.component.html',
  styleUrls: ['./Other.component.css'],
  imports:[CommonModule],
  standalone:true
})
export class OtherComponent  {


datacontainer;
  cartService: any;


constructor(private _Api4Service: ApiService) {
this.datacontainer= this._Api4Service.products;

}
addToCart(product: any): void {
  this.cartService.addToCart(product); // Add product to the cart
  // alert(`${product.brand} has been added to your cart!`); // Optional: Alert the user
}
}
