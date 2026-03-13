import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Product } from './products';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})


export class AppComponent implements AfterViewInit{
  
  searchOpen = false;

  constructor(private elementRef: ElementRef, public router: Router) {}

  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const searchContainer = this.elementRef.nativeElement.querySelector('.search-container');

    if (searchContainer && !searchContainer.contains(event.target)) {
      this.searchOpen = false;
    }
  }

  hideHeader = false;
  headerBackground = false;
  lastScrollY = 0;

  @HostListener('window:scroll', [])
  onScroll() {

  const currentScroll = window.scrollY;

  if (currentScroll > this.lastScrollY && currentScroll > 80) {
    // scroll para baixo
    this.hideHeader = true;
  } else {
    // scroll para cima
    this.hideHeader = false;

    if (currentScroll > 0) {
      this.headerBackground = true;
    }
  }

  // remove fundo quando voltar ao topo
  if (currentScroll === 0) {
    this.headerBackground = false;
  }

  this.lastScrollY = currentScroll;
}

  menuOpen = false;

  openMenu() {
    this.menuOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = 'auto';
  }

  goToNovidades() {
    this.router.navigate(['/novidades']);
  }

  goToProduct(productId: number) {
    this.router.navigate(['/produto', productId]);
  }

  likedIndex: number | null = null;

  likeProduct(index: number) {
    this.likedIndex = index;

    setTimeout(() => {
      this.likedIndex = null;
    }, 800);
  }
  cartCount = 0;


  clickTimeout: any;

  handleClick(product: Product) {
    this.clickTimeout = setTimeout(() => {
      this.openProduct(product);
    }, 200);
  }

  toggleFavorite(product: Product, event: Event) {
    event.stopPropagation();

    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout);
    }

    product.favorite = !product.favorite;
  }

  openProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }
  addToCart() {
    this.cartCount++;
  }
  title = 'Vovó Crochê';

  @ViewChildren('marqueeRef')
  marquees!: QueryList<ElementRef>;

  ngAfterViewInit() {

  this.marquees.forEach((marqueeEl: ElementRef) => {

    const marquee = marqueeEl.nativeElement;
    let position = -marquee.offsetWidth;

    const animate = () => {
      position += 3.8;

      if (position >= window.innerWidth) {
        position = -marquee.offsetWidth;
      }

      marquee.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();

    
  });
  
}
}
