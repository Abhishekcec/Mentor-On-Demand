import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { Users1Service } from './users1.service';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-trainer',
  templateUrl: './userprofile.component.html',
  styles: []
})
export class UserprofileComponent implements OnInit {

  users: User[];
  mentors: Mentor[];
  mid: String;
  constructor(private router: Router, private users1Service: Users1Service) {

  }

  ngOnInit() {
    this.users1Service.getUsers()
      .subscribe( data => {
        this.users = data;
      });
      var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
      console.log(getuserdata);
      document.getElementById('l').innerHTML="Welcome " + getuserdata.firstName+" "+getuserdata.lastName;
      document.getElementById('id').innerHTML= "User Id: "+ getuserdata.id;
      document.getElementById('e').innerHTML= "Email: "+ getuserdata.email;
      document.getElementById('m').innerHTML= "Mobile No: "+ getuserdata.contactNumber;
      document.getElementById('r').innerHTML= "Role: "+ getuserdata.role;
      document.getElementById('ex').innerHTML= "Experience: "+ getuserdata.yearsofExperience+" Years";
  };

  deleteUser(user: User): void {
    this.users1Service.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


