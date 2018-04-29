import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import { ngModuleJitUrl } from '@angular/compiler';
import { SignUpComponent } from './user/sign-up/sign-up.component'
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UserListComponent } from './user/userlist.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
    { path: '', component: HomeComponent}, 
    {path: 'home', component: HomeComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'login', component: SignInComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'userlist', component: UserListComponent,canActivate:[AuthGuard]},
    {path: 'employee', component: EmployeeComponent,canActivate:[AuthGuard]}
    
   
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
