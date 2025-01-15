import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsComponent } from '../../components/skills/skills.component';
import { CurriculoComponent } from '../../components/curriculo/curriculo.component';
import { PalestrasComponent } from '../../components/palestras/palestras.component';
import { CertificadosComponent } from '../../components/certificados/certificados.component';

@Component({
  selector: 'app-experiencias',
  imports: [NgClass, NgIf, SkillsComponent, CurriculoComponent, PalestrasComponent, CertificadosComponent],
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
