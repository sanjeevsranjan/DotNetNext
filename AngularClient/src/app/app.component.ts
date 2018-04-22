import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  IsLoggedIn:boolean=false;
  displayLogout:boolean=false;

  constructor(private router: Router) {
   }

  ngOnInit()
  {
    if(localStorage.getItem('userToken')!=null)
    {
       this.IsLoggedIn=true;
       this.displayLogout=true;
    }
  }
  Logout() {
    localStorage.removeItem('userToken');
    location.reload();
    this.router.navigate(['/login']);

  }
}
