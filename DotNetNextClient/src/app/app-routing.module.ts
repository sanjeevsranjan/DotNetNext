import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  
  {path: 'contactus', component: ContactusComponent}
 
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
