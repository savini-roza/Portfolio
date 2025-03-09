import { NgClass, NgIf } from '@angular/common';
import { Component, AfterViewInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-experiencias',
  imports: [NgClass, NgIf, RouterLink],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss'
})
export class ExperienciasComponent implements AfterViewInit {
  choiceArray = document.querySelectorAll(".choice");
  selecionado: number = 0;
  idioma = localStorage.getItem('idioma');

  constructor() {
  }

  private readonly router = inject(Router);
  
  ngAfterViewInit() {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target as HTMLElement;
          const progress = progressBar.getAttribute('data-progress');
          progressBar.style.width = `${progress}%`;
          observer.unobserve(progressBar);
        }
      });
    }, {
      threshold: 0.5
    });

    progressBars.forEach(bar => {
      observer.observe(bar);
    });
  }

  abrirCurriculo() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/Portfolio/resume`])
    );
  
    window.open(url, '_blank');
  }
}
