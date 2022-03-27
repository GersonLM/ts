import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public menu: boolean = false;
  public mostrarMenuNormal: boolean = true;
  public mostrarBoton: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  mostrarMenu(){
    this.menu = !this.menu
  }

}
