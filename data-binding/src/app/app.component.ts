import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;
}

botaoClicado(){
 alert('Botão clicado!!');
}


onKeyUp(evento: KeyboardEvent){
  
  this.valorAtual = (<HTMLInputElement>evento.target).value;
  
salvarValor(valor){
 this.valorSalvo = valor;
}

onMouseOverOut(){
  this.isMouseOver = !this.isMouseOver;

}

}