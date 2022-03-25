import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule} from '@angular/material/card';

import { InicioComponent } from './components/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { FindTheBestComponent } from './components/find-the-best/find-the-best.component';
import { RecentlyPostedComponent } from './components/recently-posted/recently-posted.component';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    CardComponent,
    FindTheBestComponent,
    RecentlyPostedComponent,
    CategoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
