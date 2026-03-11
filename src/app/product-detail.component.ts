import { Component, OnInit, HostListener, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PRODUCTS, Product } from './products';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit, AfterViewInit {
  product: Product | null = null;
  selectedImage: string = '';
  searchOpen = false;
  hideHeader = false;
  headerBackground = false;
  lastScrollY = 0;
  menuOpen = false;
  cartCount = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.product = PRODUCTS.find(p => p.id === id) || null;
      if (this.product) {
        this.selectedImage = this.product.image;
      }
    });
  }

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

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > this.lastScrollY && currentScroll > 80) {
      this.hideHeader = true;
    } else {
      this.hideHeader = false;
      if (currentScroll > 0) {
        this.headerBackground = true;
      }
    }

    if (currentScroll === 0) {
      this.headerBackground = false;
    }

    this.lastScrollY = currentScroll;
  }

  openMenu() {
    this.menuOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = 'auto';
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  addToCart() {
    this.cartCount++;
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goToNovidades() {
    this.router.navigate(['/novidades']);
  }
  zoomActive = false;
  zoomTransform = 'scale(1) translate(0,0)';
  toggleZoom(event: MouseEvent) {
    this.zoomActive = !this.zoomActive;

    if (!this.zoomActive) {
      this.zoomTransform = 'scale(1) translate(0,0)';
    }
  }
  moveZoom(event: MouseEvent) {
    if (!this.zoomActive) return;

    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const moveX = (x - 0.5) * 50;
    const moveY = (y - 0.5) * 50;

    this.zoomTransform = `scale(2) translate(${moveX}px, ${moveY}px)`;
  }

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
