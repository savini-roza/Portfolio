import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mim',
  imports: [NgIf],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.scss'
})
export class SobreMimComponent {
  idioma = localStorage.getItem('idioma') || 'pt';
}
