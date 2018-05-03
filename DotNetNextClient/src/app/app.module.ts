import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    NavbarComponent,
    HeaderComponent,
    CarouselComponent,
    WhatwedoComponent,
    StatisticsComponent,
    AsideComponent,
    HomeComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
