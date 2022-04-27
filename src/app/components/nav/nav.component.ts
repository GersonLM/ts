import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public iconMenu = faBars
  public menuStatus: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  mostrarMenu(): void {
    if (!this.menuStatus) {
      this.menuStatus = true
    } else {
      this.menuStatus = false
    }
  }

}
