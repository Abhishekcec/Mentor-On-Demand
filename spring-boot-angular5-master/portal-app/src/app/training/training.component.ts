import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  trainings: Training= new Training();
  training: Training[];
  //training1: Training[];
  training1: Training[];
  id: String;
  mid: String;
  showId=false;
  tid: String;
  constructor(private router: Router, private trainingService: TrainingService) {

  }

  ngOnInit() {
    this.id=sessionStorage.getItem("id");
    this.mid=sessionStorage.getItem("mid");
    if(this.id!=null){
    this.trainingService.getTraining()
      .subscribe( data => {
        this.training = data;
        
      });}
      else if(this.mid!=null){
        this.trainingService.getTrainingByMentor()
          .subscribe( data => {
            this.training = data;
          });}
      else{
        this.trainingService.getTraining1()
          .subscribe( data => {
            this.training = data;
          });
        }

  };
  
  public getTrainings(tid) {
    this.trainingService.getTrainings(tid)
          .subscribe( data2 => {
            this.trainings = data2;
          });
          this.showId=!this.showId;
  }

  deleteTraining(training: Training): void {
    this.trainingService.deleteTraining(training)
      .subscribe( data => {
        this.training = this.training.filter(u => u !== training);
      })
  };


}
