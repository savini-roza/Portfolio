import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  imports: [NgClass, NgIf],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss'
})
export class ExperienciasComponent {
  choiceArray = document.querySelectorAll(".choice");
  selecionado: number = 0;

  constructor() {

  }

  selecionarCard(num: number) {
    this.selecionado == num ? this.selecionado = 0 : this.selecionado = num;
  }
}
