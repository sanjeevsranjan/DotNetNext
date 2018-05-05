// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {RouterModule,Routes} from '@angular/router'
// import { ContactusComponent } from './contactus/contactus.component';

// const routes: Routes = [
  
//   {path: 'contactus', component: ContactusComponent}
 
// ];

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import { ngModuleJitUrl } from '@angular/compiler';

import { ContactusComponent} from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { OurteamComponent } from './ourteam/ourteam.component';

// const routes: Routes = [
    
//     {path: 'contactus', component: ContactusComponent},
//     {path: 'home', component: HomeComponent}
    
   
// ];

const appRoutes: Routes = [
    
    //Site routes goes here 
    { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
             { path: 'home', component:HomeComponent, pathMatch: 'full'}
            // { path: '', component: SiteLayoutComponent },
        //   { path: 'test/:id', component: AboutComponent }
        ]
    },
    
    // App routes goes here here
    { 
        path: '',
        component: AppLayoutComponent, 
        children: [
             { path: 'contactus', component: ContactusComponent },
             { path: 'login', component: LoginComponent },
             { path: 'register', component: RegisterComponent },
             { path: 'comingsoon', component: ComingsoonComponent },
             { path: 'ourteam', component: OurteamComponent }
        //   { path: 'profile', component: ProfileComponent }
        ]
    },

    //no layout routes
    // { path: 'login', component: LoginComponent},
    // { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes),
        RouterModule
    ],

    exports:[
        RouterModule
    ]

})
export class AppRoutingModule{}

export const routingComponents=[]
