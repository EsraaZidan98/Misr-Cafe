import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class Api3Service {



  // constructor(private _HttpClient : HttpClient) {}
  products = [
    {id:1, desc: "Wega Nova.",
    brand: "Wega", price: "270,000 EGP", image: "https://cdn.sanity.io/images/w5djgl78/production/f5d804187cd0f085d52aba0c5b71eef28abc7477-3550x3550.webp?auto=format"},
    {id:2, desc: "Lamarzocco Linea Mini.",
    brand: "Lamarzocco", price: "250,000 EGP", image: "https://lamarzocco.com/it/wp-content/uploads/2023/06/lm-home-linea-mini.png"},
    {id:3, desc: "Lamarzocco Strada.",
    brand: "Lamarzocco", price: "1,070,000 EGP", image: "https://lamarzocco.com/it/wp-content/uploads/2023/09/X_2-gr-Back.png"},
    {id:4, desc: "Lamarzocco Linea Classic.",
    brand: "Lamarzocco", price: "550,000 EGP", image: "https://lamarzocco.com/it/wp-content/uploads/2023/04/linea-classic-s-av-group_front.png"},
    {id:5, desc: "Lamarzocco Linea Pb",
    brand: "Lamarzocco", price: "750,000 EGP", image: "https://lamarzocco.com/it/wp-content/uploads/2023/04/linea-pb-av-group_front.png"},
    {id:6, desc: "Slayer Steam EP.",
    brand: "Slayer", price: "700,000 EGP", image: "https://slayerespresso.com/wp-content/uploads/2021/05/ep-spec-img.jpg"},
    {id:7, desc: "Slayer Steam LP.",
    brand: "Slayer", price: "850,000 EGP", image: "https://slayerespresso.com/wp-content/uploads/2021/05/lpx-turquoise-blue.jpg"},
    {id:8, desc: "Nuova Simonelli Appia Life.",
    brand: "Nuova Simonelli", price: "280,000 EGP", image: "https://nuovasimonelli.it/appialife/assets/imgs/appia-life-nuova-simonelli-XT_2grAlti_bianco_34sx.png"},
    ]




Slider = [
  
]
  static products: any;


 }


