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

const routes: Routes = [
    
    {path: 'contactus', component: ContactusComponent},
    {path: 'home', component: HomeComponent}
    
   
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes),
        RouterModule
    ],

    exports:[
        RouterModule
    ]

})
export class AppRoutingModule{}

export const routingComponents=[]
