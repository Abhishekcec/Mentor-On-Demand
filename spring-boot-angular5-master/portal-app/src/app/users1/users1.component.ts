import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { Users1Service } from './users1.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Training } from '../models/training.model';
import { Technology } from '../models/technology.model';



@Component({
  selector: 'app-users1',
  templateUrl: './users1.component.html',
  styles: []
})
export class Users1Component implements OnInit {
  id: string;
  users: User[];
  training: Training[];
  technology: Technology[];
  constructor(private router: Router, private users1Service: Users1Service, private modalService: NgbModal) {

  }
  

  //constructor(private modalService: NgbModal) {}

  

  

  ngOnInit() {
    if(localStorage.length == 0){
      alert('Not Logged in, Please Login First');
      this.router.navigate(['\signin']);
    }
    else{
    this.users1Service.getUsers()
      .subscribe( data => {
        this.users = data;
      });

      var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
      console.log(getuserdata);
      document.getElementById('l').innerHTML="Welcome " + getuserdata.firstName+" "+getuserdata.lastName;
      this.id=sessionStorage.getItem("id");
      this.users1Service.getTraining()
          .subscribe( data => {
            this.training = data;
          });

      this.users1Service.getTechnology()
          .subscribe( data => {
            this.technology = data;
          });

        }
  };

  deleteUser(user: User): void {
    this.users1Service.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  logout()
  {
    sessionStorage.removeItem("id");
    window.localStorage.clear();
    this.router.navigate(['signin']);
  }

}


