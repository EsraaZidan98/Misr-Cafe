import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit, OnDestroy {

  // Slider 1
  @ViewChild('slider', { static: true }) slider!: ElementRef;
  currentIndex1: number = 0;
  images1: string[] = [
    'https://lamarzocco.com/it/wp-content/uploads/2023/09/X_2-gr-Back.png',
    'https://lamarzocco.com/it/wp-content/uploads/2023/09/X_2-gr-Back.png',
    'https://lamarzocco.com/it/wp-content/uploads/2023/09/X_2-gr-Back.png'
  ];
  autoPlayInterval1: any;

  // Slider 2
  @ViewChild('slider2', { static: true }) slider2!: ElementRef;
  currentIndex2: number = 0;
  images2: string[] = [
    'https://gritcoffee.co/cdn/shop/files/costa-rica-Coffee.png?v=1721980547&width=600',
    'https://gritcoffee.co/cdn/shop/files/wweeww-4443355.png?v=1692048727&width=600',
    'https://gritcoffee.co/cdn/shop/files/GritIndianCoffee.png?v=1692047885&width=600'
  ];
  autoPlayInterval2: any;

  // Slider 3
  @ViewChild('slider3', { static: true }) slider3!: ElementRef;
  currentIndex3: number = 0;
  images3: string[] = [
    'https://coffeetoolskw.com/cdn/shop/products/HUSKEECUPCOFFEECUP8oz.png?v=1634042115&width=1200',
    'https://coffeetoolskw.com/cdn/shop/products/VeroCortadoGlass-Smoke.png?v=1660661408&width=1200',
    'https://coffeetoolskw.com/cdn/shop/products/FresskoCaminoCupKhaki-340mL.png?v=1678038848&width=1200'
  ];
  autoPlayInterval3: any;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Initialize Typed.js in the browser only
    if (isPlatformBrowser(this.platformId)) {
      new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50
      });

      this.startAutoPlay1();
      this.startAutoPlay2();
      this.startAutoPlay3();
    }
  }

  // Slider 1 functions
  nextSlide1(): void {
    this.currentIndex1 = (this.currentIndex1 + 1) % this.images1.length;
    this.updateSliderPosition(this.slider, this.currentIndex1);
  }

  prevSlide1(): void {
    this.currentIndex1 = (this.currentIndex1 - 1 + this.images1.length) % this.images1.length;
    this.updateSliderPosition(this.slider, this.currentIndex1);
  }

  startAutoPlay1(): void {
    this.autoPlayInterval1 = setInterval(() => this.nextSlide1(), 3000);
  }

  stopAutoPlay1(): void {
    clearInterval(this.autoPlayInterval1);
  }

  // Slider 2 functions
  nextSlide2(): void {
    this.currentIndex2 = (this.currentIndex2 + 1) % this.images2.length;
    this.updateSliderPosition(this.slider2, this.currentIndex2);
  }

  prevSlide2(): void {
    this.currentIndex2 = (this.currentIndex2 - 1 + this.images2.length) % this.images2.length;
    this.updateSliderPosition(this.slider2, this.currentIndex2);
  }

  startAutoPlay2(): void {
    this.autoPlayInterval2 = setInterval(() => this.nextSlide2(), 3000);
  }

  stopAutoPlay2(): void {
    clearInterval(this.autoPlayInterval2);
  }

  // Slider 3 functions
  nextSlide3(): void {
    this.currentIndex3 = (this.currentIndex3 + 1) % this.images3.length;
    this.updateSliderPosition(this.slider3, this.currentIndex3);
  }

  prevSlide3(): void {
    this.currentIndex3 = (this.currentIndex3 - 1 + this.images3.length) % this.images3.length;
    this.updateSliderPosition(this.slider3, this.currentIndex3);
  }

  startAutoPlay3(): void {
    this.autoPlayInterval3 = setInterval(() => this.nextSlide3(), 3000);
  }

  stopAutoPlay3(): void {
    clearInterval(this.autoPlayInterval3);
  }

  updateSliderPosition(slider: ElementRef, index: number): void {
    const offset = -index * 100;
    this.renderer.setStyle(slider.nativeElement, 'transform', `translateX(${offset}%)`);
  }

  ngOnDestroy(): void {
    this.stopAutoPlay1();
    this.stopAutoPlay2();
    this.stopAutoPlay3();
  }
}
