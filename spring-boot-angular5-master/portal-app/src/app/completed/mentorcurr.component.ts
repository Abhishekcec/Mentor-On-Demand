import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { CompletedService } from './completed.service';

@Component({
  selector: 'app-current',
  templateUrl: './mentorcurr.component.html',
  styleUrls: ['./completed.component.css']
})
export class MentorcurrComponent implements OnInit {
  training: Training[];
  id: string;
  mid: string;
  startDate=localStorage.getItem("startDate");
  endDate=localStorage.getItem("endDate");


  constructor(private router: Router, private completedService: CompletedService) {

  }

  ngOnInit() {
    this.id=sessionStorage.getItem("id");
    this.mid=sessionStorage.getItem("mid");
    if(this.id!=null){
      this.completedService.getTraining()
        .subscribe( data => {
          this.training = data;
        });}
        else if(this.mid!=null){
          this.completedService.getMentorTraining()
        .subscribe( data => {
          this.training = data;
        });
        }
        else{
          this.completedService.getTraining()
            .subscribe( data => {
              this.training = data;
            });
          }
  
    };

  deleteTraining(training: Training): void {
    this.completedService.deleteTraining(training)
      .subscribe( data => {
        this.training = this.training.filter(u => u !== training);
      })
  };


}
