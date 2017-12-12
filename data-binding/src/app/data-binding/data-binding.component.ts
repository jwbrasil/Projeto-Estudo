import { Component, OnInit, enableProdMode } from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://globo.com';
  cursoAngular: boolean = true;
  urlImagem =  'http://lorempixel.com/400/200/';

 valorAtual: string = '';
 valorSalvo = ''; 
 
isMouseOver: boolean = false;

nomeDoCurso: string = 'Angular';

  getValor(){
    return 1;  
  }

  getCurtiCurso(){
    return true;
  }

  botaoClicado()
  {
  alert('Botão clicado!!');
  }
  
  
  onKeyUp(evento: KeyboardEvent){
  
  this.valorAtual = (<HTMLInputElement>evento.target).value;
  }  
  
  salvarValor(valor){
  this.valorSalvo = valor;
  }
  
  onMouseOverOut(){
  this.isMouseOver = !this.isMouseOver;
  
  }
  
  
  

  constructor() { }

  ngOnInit() {
  }

}
