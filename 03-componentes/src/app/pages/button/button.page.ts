import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InicioPage } from '../inicio/inicio.page';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  public favorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.favorito = !this.favorito;
  }
}
