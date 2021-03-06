import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent {

  user: User = new User();
  constructor(private router: Router, private signupService: SignupService) {

  }

  // ngOnInit() {
  //   this.signupService.getUsers()
  //     .subscribe( data => {
  //       this.users = data;
  //     });
  // };


  
  createUser(): void {
    this.signupService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
          this.router.navigate(['signin']);
        });

  
  };

}


