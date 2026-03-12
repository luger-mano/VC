import { Component, HostListener, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from './products';

@Component({
  selector: 'app-receber-novidades',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './receber-novidades.component.html',
  styleUrl: './receber-novidades.component.scss',
})
export class ReceberNovidadesComponent implements AfterViewInit {
  searchOpen = false;
  hideHeader = false;
  headerBackground = false;
  lastScrollY = 0;
  menuOpen = false;

  constructor(private router: Router, private elementRef: ElementRef) {}

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

  @ViewChildren('marqueeRef')
  marquees!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.marquees.forEach((marqueeEl: ElementRef) => {
      const marquee = marqueeEl.nativeElement;
      let position = -marquee.offsetWidth;

      const animate = () => {
        position += 0.5;
        if (position > marquee.offsetWidth) {
          position = -marquee.offsetWidth;
        }
        marquee.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };

      animate();
    });
  }

  submitNewsletter(event: any) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o email
    console.log('Newsletter subscription submitted');
    // Mostra mensagem de sucesso
    alert('Obrigado por se inscrever! 🎉');
  }
}
