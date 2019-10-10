import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { TrainerService } from './trainer.service';
import { Training } from '../models/training.model';
import { Alert } from 'selenium-webdriver';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styles: []
})
export class TrainerComponent implements OnInit {

  users: User[];
  mentor: Mentor[];
  training: Training[];
  mid: String;
  constructor(private router: Router, private trainerService: TrainerService) {

  }

  ngOnInit() {
    if(localStorage.length == 0){
      alert('Not Logged in, Please Login First');
      this.router.navigate(['mlogin']);
    }
    else{
    this.mid=sessionStorage.getItem("mid");
    if(this.mid==null){
    alert("iNVALID mentor");}
      else{
        this.trainerService.getMentor()
          .subscribe( data => {
            this.mentor = data;

            this.trainerService.getTraining()
            .subscribe( data => {
              this.training = data;
            });
            var getuserdata=JSON.parse(localStorage.getItem('storementordata'));
          console.log(getuserdata);
          document.getElementById('m').innerHTML="Welcome " + getuserdata.firstName+" "+getuserdata.lastName;
  
          });
        }
      }
  };

  logout()
  {
    sessionStorage.removeItem("mid");
    window.localStorage.clear();
    this.router.navigate(['mlogin']);
  }

  deleteUser(user: User): void {
    this.trainerService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


