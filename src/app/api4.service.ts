import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor(private _HttpClient : HttpClient) {}
 products=[
  {
    name: "Delonghi Thermal mug DLSC055",
    image: "https://www.espressoclubegypt.com/uploads/product/source/ALLZ-886932.jpeg",
    price: "1944 EGP"
  },
  {
    name: "HuskeeCup 12oz",
    image: "https://coffeetoolskw.com/cdn/shop/products/HUSKEECUPCOFFEECUP8oz.png?v=1634042115&width=1200",
    price: "125 EGP"
  },
  {
    name: "Dolenghi double wall thermal espresso cups - 2 cups",
    image: "https://www.espressoclubegypt.com/uploads/product/source/F1T3-283978.jpeg",
    price: "1499 EGP"
  },
  {
    name: "Vero Cortado Glass - Smoke",
    image: "https://coffeetoolskw.com/cdn/shop/products/VeroCortadoGlass-Smoke.png?v=1660661408&width=1200",
    price: "120 EGP"
  },
  {
    name: "Bino Cup 230ml - Khaki",
    image: "https://coffeetoolskw.com/cdn/shop/products/FresskoCaminoCupKhaki-340mL.png?v=1678038848&width=1200",
    price: "99 EGP"
  },
  {
    name: "Coffee Tools Cup 8oz 25 Pcs - Turquoise",
    image: "https://coffeetoolskw.com/cdn/shop/files/CoffeeToolsCups8oz.png?v=1721922416&width=1200",
    price: "99 EGP"
  },
  {
    name: "PICO Espresso Cup Black",
    image: "https://coffeetoolskw.com/cdn/shop/products/pico_espresso_cup_black_1080.jpg?v=1680631273&width=500",
    price: "130 EGP"
  },
  {
    name: "VERO ESPRESSO GLASS (3 OZ), Amber",
    image: "https://coffeetoolskw.com/cdn/shop/products/image_ffa30e65-bbeb-4cd6-9f46-9fc1f687b1d1.jpg?v=1585740611&width=1000",
    price: "1500 EGP"
  }
]



 }


