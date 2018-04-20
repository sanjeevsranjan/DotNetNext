import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {
  users=[];
 // resUserData:User
  constructor(private _userService : UserService) { }

  ngOnInit() {
     this._userService.getAllUsers().subscribe(resUserData=>this.users=resUserData as any);
  }

}
