import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  getProducts() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  getCoffee() {
    return this.http.get('https://fake-coffee-api.vercel.app/api')
  }
}
