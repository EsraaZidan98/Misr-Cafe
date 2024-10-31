
import { Component, OnInit } from '@angular/core';
import { CoffeeService } from './service/coffee.service'; // Import CoffeeService
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import Snackbar
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CoffeeComponent implements OnInit {
toggleExpand(_t5: any,$event: MouseEvent) {
throw new Error('Method not implemented.');
}
  products: any[] = [];

  constructor(private service: CoffeeService , private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.service.getCoffee().subscribe((res: any) => {
      this.products = res.map((item: any) => ({
        ...item,
        expanded: false // Initially set all descriptions as collapsed
      }));
    }, error => {
    console.error('Error fetching coffee products:', error); // Log any errors
  });
  
  }
  addToCart(item: any): void {
    console.log('Add to cart:', item);
    // Implement your cart logic here
  }
}
