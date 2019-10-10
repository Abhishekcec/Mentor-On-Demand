import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MloginService } from './mlogin.service';

@Component({
  selector: 'app-mloginn',
  templateUrl: './mlogin.component.html',
  styles: []
})
export class MloginComponent implements OnInit {

  mlogins: Mentor[];
  mlogin: Mentor=new Mentor();
  
  constructor(private router: Router, private mloginService: MloginService) {

  }

  ngOnInit() {
    this.mloginService.getMentor()
      .subscribe( data => {
        this.mlogins = data;
      });
  };

  deleteMentor(mlogin: Mentor): void {
    this.mloginService.deleteMentor(mlogin)
      .subscribe( data => {
        this.mlogins = this.mlogins.filter(u => u !== mlogin);
      })
  };

  authenticate(userName,password): void{
    this.mloginService.authenticate(userName,password).subscribe(data=>{
      
      if(data==null)
      {
        alert("incorrect");
      }
      else{
        
        sessionStorage.setItem('mid', data.id);
        
      this.router.navigate(['trainer']);
      localStorage.setItem('storementordata',JSON.stringify(data));
      }
    })
  }

}


