import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges {

@Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
   }

   ngOnChanges() {
    this.log('ngChanges');
  }

   ngOnInit() {
    this.log('ngOnInit');
  }

  private log(hook: string){
    console.log(hook);
  }

}
