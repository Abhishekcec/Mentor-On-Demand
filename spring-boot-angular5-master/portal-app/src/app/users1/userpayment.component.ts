import  {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Training } from '../models/training.model';
import { Payment} from '../models/payment.model';
import { Users1Service } from './users1.service';

@Component({
	selector: 'my-employee18',
    templateUrl: './userpayment.component.html'
    //styleUrls: ['./userreceipt.component.css']
})
export class UserpaymentComponent implements OnInit
{   
   
    payments: Payment[];
	trainings: Training=new Training();
    showId=false;
    users=sessionStorage.getItem('fname');
	Payid;
	amt;
    constructor(private router: Router, private users1Service: Users1Service)
	{

	}
    ngOnInit(){
	
		this.users1Service.getPayment()
		.subscribe(data1=>{
			this.payments=data1;
		});
		var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
      console.log(getuserdata);
      document.getElementById('u').innerHTML=getuserdata.firstName+"'s Payments Details";

	}


	getTrainings(Pid,amount,payid)
	{
		this.Payid=payid;
		this.amt=amount;
		
		this.users1Service.getTrainings(Pid)
		.subscribe(data=>{
			this.trainings=data;
		});
		this.showId=!this.showId;
		
	}

	Payfees(amount){

		if(this.amt==0)
		{
			this.users1Service.Payfees(this.Payid,amount)
		.subscribe(data=>{
			alert("Fees Paid Successfully!");
		});
		
		}
		else{
			alert("Fees Already Paid");
		}
	}

    logout()
    {
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('fname');
        sessionStorage.removeItem('id');
        this.router.navigate(['home']);
        
    }
}


