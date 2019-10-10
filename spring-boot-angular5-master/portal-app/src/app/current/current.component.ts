import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { CurrentService } from './current.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  training: Training[];
  //id=sessionStorage.getItem("id");
  startDate=localStorage.getItem("startDate");
  endDate=localStorage.getItem("endDate");


  constructor(private router: Router, private currentService: CurrentService) {

  }

  ngOnInit() {
    this.currentService.getTraining()
          .subscribe( data => {
            this.training = data;
          });
    
  }

  deleteTraining(training: Training): void {
    this.currentService.deleteTraining(training)
      .subscribe( data => {
        this.training = this.training.filter(u => u !== training);
      })
  };


}
