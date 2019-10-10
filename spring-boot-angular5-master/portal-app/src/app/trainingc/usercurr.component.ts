import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainingcService } from './trainingc.service';

@Component({
  selector: 'app-trainingc',
  templateUrl: './usercurr.component.html',
  styleUrls: ['./trainingc.component.css']
})
export class UsercurrComponent implements OnInit {
  training: Training[];
  id: string;
  mid: string;
  constructor(private router: Router, private trainingcService: TrainingcService) {

  }

  ngOnInit() {
    this.id=sessionStorage.getItem("id");
    this.mid=sessionStorage.getItem("mid");
    if(this.id!=null){
    this.trainingcService.getTraining()
      .subscribe( data => {
        this.training = data;
      });}
      else if(this.mid!=null){
        this.trainingcService.getMentorTraining()
      .subscribe( data => {
        this.training = data;
      });
      }
      else{
        this.trainingcService.getTraining()
          .subscribe( data => {
            this.training = data;
          });
        }

  };

  deleteTraining(training: Training): void {
    this.trainingcService.deleteTraining(training)
      .subscribe( data => {
        this.training = this.training.filter(u => u !== training);
      })
  };


}
