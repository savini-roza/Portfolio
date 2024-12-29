import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    InicioComponent,
    SobreMimComponent,
    ExperienciasComponent,
    ContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
