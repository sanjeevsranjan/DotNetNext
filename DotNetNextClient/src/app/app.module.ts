import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


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
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { UserService } from './shared/user.service';


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
    FooterComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    LoginComponent,
    RegisterComponent,
    ComingsoonComponent,
    OurteamComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
