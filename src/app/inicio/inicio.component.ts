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
  resultado!: string;
  consumo!: number;

  constructor() {
    this.qtdPessoas = 0;
    this.numComodos = 0;
    this.maquinaLavar = false;
    this.secadora = false;
    this.aparelhosTv = false;
    this.computador = false;
  }

  onComputadorChange() {
    this.computador = !this.computador; // alterna entre true e false
  }
  
  onMaquinaChange() {
    this.maquinaLavar = !this.maquinaLavar; // alterna entre true e false
  }
  
  onSecadoraChange() {
    this.secadora = !this.secadora; // alterna entre true e false
  }
  
  onAparelhosChange() {
    this.aparelhosTv = !this.aparelhosTv; // alterna entre true e false
  }
  
  onSubmit() {
    // Potência dos aparelhos elétricos em watts
    const potenciaMaquinaLavar = 1000;
    const potenciaSecadora = 2000;
    const potenciaAparelhosTv = 200;
    const potenciaComputador = 150;
    
    // Horas de uso diário dos aparelhos elétricos
    const horasMaquinaLavar = 1;
    const horasSecadora = 1;
    const horasAparelhosTv = 4;
    const horasComputador = 6;
    
    // Cálculo do consumo de energia em kWh
    let consumoEnergia = 0;
    
    if (this.maquinaLavar) {
      consumoEnergia += (potenciaMaquinaLavar * horasMaquinaLavar) / 1000;
    }
    
    if (this.secadora) {
      consumoEnergia += (potenciaSecadora * horasSecadora) / 1000;
    }
    
    if (this.aparelhosTv) {
      consumoEnergia += (potenciaAparelhosTv * horasAparelhosTv) / 1000;
    }
    
    if (this.computador) {
      consumoEnergia += (potenciaComputador * horasComputador) / 1000;
    }
    
    this.consumo = consumoEnergia;
    this.resultado = this.consumo.toFixed(2);
    console.log(`O consumo de energia é de ${consumoEnergia.toFixed(2)} kWh.`);
  }
} 
