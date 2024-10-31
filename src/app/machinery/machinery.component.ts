import { Component } from '@angular/core';
import { Api3Service } from '../api3.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrl: './machinery.component.css',
  imports:[CommonModule],
  standalone:true
})
export class MachineryComponent {
// addToCart(_t5: { id: number; desc: string; brand: string; price: string; image: string; }) {
// throw new Error('Method not implemented.');
// }

 dataContainer: any[] = [];

     constructor(private Api3Service:Api3Service, private cartService: CartService) {}


  ngOnInit(): void {
    this.dataContainer = this.Api3Service.products; // Fetch products from the ApiService
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product); // Add product to the cart
    // alert(`${product.brand} has been added to your cart!`); // Optional: Alert the user
  }

}