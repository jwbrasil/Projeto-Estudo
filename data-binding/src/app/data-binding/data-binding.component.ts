import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://globo.com';
  cursoAngular: boolean = true;
  urlImagem =  'http://lorempixel.com/400/200/';

  getValor(){
    return 1;  
  }

  getCurtiCurso(){
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}