import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userClaims: any;
  displayLogout:boolean=false;
  constructor(private router: Router, private userService: UserService) { }
  ngOnInit() {
   
    if(localStorage.getItem('userToken')!=null)
    {
       this.displayLogout=true;
    }
    debugger;
    this.userService.getUserClaims().subscribe((data: any) => {
     
      this.userClaims = data;
      console.log(data.userName);
    });
   
  }

  Logout() {
   
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}