import { NgClass, NgIf } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  imports: [NgClass, NgIf],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss'
})
export class ExperienciasComponent implements AfterViewInit {
  choiceArray = document.querySelectorAll(".choice");
  selecionado: number = 0;

  constructor() {

  }

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
}
