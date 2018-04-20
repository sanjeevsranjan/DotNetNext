import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SignUpComponent } from './user/sign-up/sign-up.component'
import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherService } from './teacher/teacher.service';
import { UserListComponent } from './user/userlist.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    TeacherComponent,
    UserListComponent,
    SignInComponent,
    HomeComponent,
    AboutusComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [UserService,AppRoutingModule,TeacherService,AuthGuard],
  // providers: [UserService,AuthGuard,AppRoutingModule,TeacherService
  //   ,
  //   {
  //     provide : HTTP_INTERCEPTORS,
  //     useClass : AuthInterceptor,
  //     multi : true
  //   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
