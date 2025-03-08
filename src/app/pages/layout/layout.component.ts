import { Component, OnInit } from '@angular/core';
import { ContatoComponent } from '../contato/contato.component';
import { ExperienciasComponent } from '../experiencias/experiencias.component';
import { InicioComponent } from '../inicio/inicio.component';
import { SobreMimComponent } from '../sobre-mim/sobre-mim.component';

@Component({
  selector: 'app-layout',
  imports: [InicioComponent,
    SobreMimComponent,
    ExperienciasComponent,
    ContatoComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  ngOnInit() {
    const idioma = localStorage.getItem('idioma');
    if (!idioma) {
      localStorage.setItem('idioma', 'pt');
    }
  }
}
