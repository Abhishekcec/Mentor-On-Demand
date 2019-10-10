import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MsignupService } from './msignup.service';

@Component({
  selector: 'app-msignup',
  templateUrl: './msignup.component.html',
  styles: []
})
export class MsignupComponent implements OnInit{
  mentors: Mentor[];
  mentor: Mentor = new Mentor();
  constructor(private router: Router, private msignupService: MsignupService) {

  }

   ngOnInit() {
     this.msignupService.getMentor()
       .subscribe( data => {
         this.mentors = data;
       });
   };


  deleteMentor(mentors: Mentor): void {
    this.msignupService.deleteMentor(mentors)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentors);
      })
  };
  createMentor(): void {
    this.msignupService.createMentor(this.mentor)
        .subscribe( data => {
          alert("Mentor created successfully.");
        });

  
  };

  

}


