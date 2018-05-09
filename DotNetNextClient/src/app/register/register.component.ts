import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      FullName: '',
      Email: '',
      Password: '',
      PhoneNumber: ''
      
    }
  }
  Register(form: NgForm) {
    console.log(form.value);
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
          this.resetForm(form);
          //this.toastr.success('User registration successful');
          alert('User registration successful')
      
      });
  }

}
