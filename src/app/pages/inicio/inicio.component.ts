import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-inicio',
  imports: [NgxTypewriterComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  constructor() { }

  @ViewChild('menu')
  menu!: ElementRef;

  @ViewChild('inicio')
  inicio!: ElementRef;

  words: string[] = [
    'Analista de Cibersegurança',
    'Desenvolvedora Web',
    'Emo',
    'Engenheira de Software',
    'Entusiasta de Angelologia',
    'Palestrante',
    'Apreciadora de pássaros',
    'Artista',
    'Blue Teamer'
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (window.pageYOffset > this.inicio.nativeElement.offsetHeight) {
      this.menu.nativeElement.classList.add('scrolled');
    } else {
      this.menu.nativeElement.classList.remove('scrolled');
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
