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
   
    if(sessionStorage.getItem('userToken')!=null)
    {
       this.displayLogout=true;
    }
   
    this.userService.getUserClaims().subscribe((data: any) => {
     
      this.userClaims = data;
      console.log(data.userName);
    });
   
  }

  Logout() {
   
    sessionStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}