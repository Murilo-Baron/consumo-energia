import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  qtdPessoas: number;
  numComodos: number;
  maquinaLavar: boolean;
  secadora: boolean;
  aparelhosTv: boolean;
  computador: boolean;

  constructor() {
    this.qtdPessoas = 0;
    this.numComodos = 0;
    this.maquinaLavar = false;
    this.secadora = false;
    this.aparelhosTv = false;
    this.computador = false;
  }


/*  onSubmit() {
    // aqui você pode escrever a lógica para calcular o consumo energético com base nas informações do formulário
  }
*/
}