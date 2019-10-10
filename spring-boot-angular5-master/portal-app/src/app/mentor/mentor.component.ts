import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MentorService } from './mentor.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styles: []
})
export class MentorComponent implements OnInit {

  mentors: Mentor[];

  constructor(private router: Router, private mentorService: MentorService) {

  }

  ngOnInit() {
    this.mentorService.getMentor()
      .subscribe( data => {
        this.mentors = data;
      });
  };

  deleteMentor(mentors: Mentor): void {
    this.mentorService.deleteMentor(mentors)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentors);
      })
  };

}


