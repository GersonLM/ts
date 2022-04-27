import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InicioComponent } from './components/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { FindTheBestComponent } from './components/find-the-best/find-the-best.component';
import { RecentlyPostedComponent } from './components/recently-posted/recently-posted.component';
import { CategoryComponent } from './components/category/category.component';
import { PortfoliosComponent } from './components/portfolios/portfolios.component';
import { NewsletterSubscriptionComponent } from './components/newsletter-subscription/newsletter-subscription.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    CardComponent,
    FindTheBestComponent,
    RecentlyPostedComponent,
    CategoryComponent,
    PortfoliosComponent,
    NewsletterSubscriptionComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
