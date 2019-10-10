import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainerService } from './trainer.service';
import { Technology } from '../models/technology.model';
import { Mentor } from '../models/mentor.model';
//import { Mentor } from '../models/mentor.model';

@Component({
  templateUrl: './createtraining.component.html'
})
export class CreatetrainingComponent {
  
 training: Training = new Training();
  //trainings: Training[];
  technology: Technology[];
  mentor: Mentor[];
  mdata:Mentor=new Mentor();

  constructor(private router: Router, private trainerService: TrainerService) {

  }
  ngOnInit() {
    this.trainerService.getTechnology()
    .subscribe( data => {
      this.technology = data;
      
      this.mdata=JSON.parse(localStorage.getItem('storementordata'));
      
    });
    
    /* alert(mdata.id);
    document.getElementById('mentorId').innerHTML= mdata.id; */
    /*this.trainerService.getMentor()
          .subscribe( data => {
            this.mentor = data;
          });
        

    /*this.trainerService.getTraining()
    .subscribe( data => {
      this.trainings = data;
    });*/
  }

  createTraining(): void {
    this.trainerService.createTraining(this.training)
        .subscribe( data => {
          alert("Training Module added successfully.");
        });
        
  };

}
