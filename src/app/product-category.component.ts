import { Component, HostListener, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Product, PRODUCTS } from './products';

@Component({
    selector: 'app-product-category',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './product-category.component.html',
    styleUrls: ['./app.component.scss', './product-category.component.scss'],
})
export class ProductCategoryComponent implements AfterViewInit {
    searchOpen = false;
    hideHeader = false;
    headerBackground = false;
    lastScrollY = 0;
    menuOpen = false;

    categoryTitle = '';
    products: Product[] = [];

    likedIndex: number | null = null;
    cartCount = 0;
    clickTimeout: any;

    filterOpen = false;
    sortOpen = false;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private elementRef: ElementRef) { }

    ngOnInit() {
        // read category from route and determine title and product list
        const cat = this.activatedRoute.snapshot.paramMap.get('category');
        switch (cat) {
            case 'destacados':
                this.categoryTitle = 'Destacados';
                // arbitrary example filter: first 4 products
                this.products = PRODUCTS.slice(0, 4);
                break;
            case 'promocoes':
                this.categoryTitle = 'Promoções';
                // demonstration: all products (count will show accordingly)
                this.products = PRODUCTS;
                break;
            case 'novidades':
                this.categoryTitle = 'Novidades';
                // take last 3 items as "new"
                this.products = PRODUCTS.slice(-3);
                break;
            case 'todos':
            default:
                this.categoryTitle = 'Todos os produtos';
                this.products = PRODUCTS;
                break;
        }

        // ensure scroll started at top
        window.scrollTo({ top: 0, behavior: 'auto' });
    }



    toggleFilter() {
        this.filterOpen = !this.filterOpen;
        this.sortOpen = false;
    }

    toggleSort() {
        this.sortOpen = !this.sortOpen;
        this.filterOpen = false;
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

    goHome() {
        this.router.navigate(['/home']);
    }

    goToNovidades() {
        this.router.navigate(['/novidades']);
    }

    goToProduct(id: number) {
        this.router.navigate(['/produto', id]);
    }

    likeProduct(index: number) {
        this.likedIndex = index;
        setTimeout(() => {
            this.likedIndex = null;
        }, 800);
    }

    addToCart() {
        this.cartCount++;
    }

    handleClick(product: Product) {
        this.clickTimeout = setTimeout(() => {
            this.goToProduct(product.id);
        }, 200);
    }

    toggleFavorite(product: Product, event: Event) {
        event.stopPropagation();
        if (this.clickTimeout) {
            clearTimeout(this.clickTimeout);
        }
        product.favorite = !product.favorite;
    }

    closeSort() {
        this.sortOpen = false;
    }

    sortProducts(criteria: string) {
        if (criteria === 'menor') {
            this.products.sort((a, b) => a.price - b.price);
        } else if (criteria === 'maior') {
            this.products.sort((a, b) => b.price - a.price);
        } else if (criteria === 'relevantes') {
            // Assuming original order or by id
            this.products.sort((a, b) => a.id - b.id);
        }
        this.sortOpen = false;
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
