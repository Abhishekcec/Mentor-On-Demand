import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { MainService } from './main.service';
import { NgPlural } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  users: User[];
  usr:String = null;
  pwd:String = null;
  validate():void{
    if(this.usr == 'admin' && this.pwd == 'admin')
    {
      location.href = '/admin';
    }
    else if(this.usr == null && this.pwd == null)
    {
      alert("Please enter the username or password");
    }
    else{
      alert("Invalid credentials");
    }
  }

  constructor(private router: Router, private mainService: MainService) {

  }

  ngOnInit() {
    this.mainService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.mainService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


