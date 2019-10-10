import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { TrainerService } from './trainer.service';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-trainer',
  templateUrl: './mentorprofile.component.html',
  styles: []
})
export class MentorprofileComponent implements OnInit {

  users: User[];
  mentors: Mentor[];
  mid: String;
  constructor(private router: Router, private trainerService: TrainerService) {

  }

  ngOnInit() {
    this.trainerService.getMentor()
      .subscribe( data => {
        this.mentors = data;
      });
      var getmentordata=JSON.parse(localStorage.getItem('storementordata'));
      console.log(getmentordata);
      document.getElementById('l').innerHTML="Welcome " + getmentordata.firstName+" "+getmentordata.lastName;
      document.getElementById('id').innerHTML= "Trainer Id: "+ getmentordata.id;
      document.getElementById('e').innerHTML= "Email: "+ getmentordata.email;
      document.getElementById('m').innerHTML= "Mobile No: "+ getmentordata.contactNumber;
      document.getElementById('r').innerHTML= "Role: "+ getmentordata.role;
      document.getElementById('ex').innerHTML= "Experience: "+ getmentordata.yearsofExperience+" Years";
  };

  deleteUser(user: User): void {
    this.trainerService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


