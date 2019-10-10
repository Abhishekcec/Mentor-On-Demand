import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainingService } from './training.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './userdetails.component.html',
  styles: []
})
export class UserdetailsComponent implements OnInit {
  training: Training[];
  users: User[];
  id: String;
  
  constructor(private router: Router, private trainingService: TrainingService) {

  }

  ngOnInit() {
    this.id=sessionStorage.getItem("id");
    if(this.id==null){
    this.trainingService.getTrainingByUser()
      .subscribe( data => {
        this.training = data;
      });}
      else{
        this.trainingService.getTraining()
          .subscribe( data => {
            this.training = data;
            
          });
            this.trainingService.getUserTraining()
          .subscribe( data1 => {
            this.users = data1;
          });
        }

  };

  


}
