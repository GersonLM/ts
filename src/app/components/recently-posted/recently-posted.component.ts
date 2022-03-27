import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-posted',
  templateUrl: './recently-posted.component.html',
  styleUrls: ['./recently-posted.component.css']
})
export class RecentlyPostedComponent implements OnInit {
  public hoverActive: boolean = false;
  public hoverActiveR: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  hover(){
    this.hoverActive = true;
  }
  noHover(){
    this.hoverActive = false;
  }

  hoverR(){
    this.hoverActiveR = true;
  }
  noHoverR(){
    this.hoverActiveR = false;
  }

}
