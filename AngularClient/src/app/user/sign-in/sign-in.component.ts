import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  // OnSubmit(userName,password){
  //  console.log("fffddd");
  //  console.log(userName);
  //    this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
  //     localStorage.setItem('userToken',data.token);
  //     this.router.navigate(['/home']);
  //   },
  //   (err : HttpErrorResponse)=>{
  //     this.isLoginError = true;
  //   });
  // }

  OnSubmit(form: NgForm){
     debugger;
      this.userService.userAuthentication(form.value).subscribe((data : any)=>{
       localStorage.setItem('userToken',data.token);
     // let IsLoggedIn:boolean=true;
       this.router.navigate(['/home']);
     },
     (err : HttpErrorResponse)=>{
       alert('Invalid Credenial')
       this.isLoginError = true;
     });
   }

}