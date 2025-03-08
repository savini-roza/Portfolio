import { NgIf } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-inicio',
  imports: [NgxTypewriterComponent, NgIf],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  bandeira: string = '';
  idioma: string = ''

  constructor() { }

  ngOnInit(): void {
    this.idioma = localStorage.getItem('idioma') || 'pt';
    this.bandeira = localStorage.getItem('idioma') == 'pt' ? "/flag-uk.png" : "/flag-br.png";
  }

  @ViewChild('menu')
  menu!: ElementRef;

  @ViewChild('inicio')
  inicio!: ElementRef;

  palavras: string[] = [
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

  words: string[] = [
    "Cybersecurity Analyst",
    "Web Developer",
    "Emo",
    "Software Engineer",
    "Angelology Enthusiast",
    "Speaker",
    "Bird Enthusiast",
    "Artist",
    "Blue Teamer"
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

  mudarIdioma() {
    const idioma = localStorage.getItem('idioma');
    if (idioma === 'pt') {
      localStorage.setItem('idioma', 'en');
    } else {
      localStorage.setItem('idioma', 'pt');
    }
    window.location.reload();
  }
}
