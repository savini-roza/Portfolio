import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-curriculo',
  imports: [NgIf],
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.scss'
})
export class CurriculoComponent {
  idioma = localStorage.getItem('idioma');
}
