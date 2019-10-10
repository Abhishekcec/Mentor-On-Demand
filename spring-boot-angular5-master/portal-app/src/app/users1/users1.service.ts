import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Training } from '../models/training.model';
import { Technology } from '../models/technology.model';
import { Payment } from '../models/payment.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class Users1Service {
  id: String;
  constructor(private http:HttpClient, private modalService: NgbModal) {}

  private userUrl = 'http://localhost:8071/users';
  private trainingUrl = 'http://localhost:8071/training';
  private technologyUrl = 'http://localhost:8071/technology';
  private paymentUrl = 'http://localhost:8071/payment';
  private mentorUrl = 'http://localhost:8071/mentors';
 
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }
  public getTraining() {
    this.id=sessionStorage.getItem("id");
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByUsersIdAndStatusEquals/"+this.id+"/in progress");
  }
  public getTechnology() {
    return this.http.get<Technology[]>(this.technologyUrl);
  }
  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
  

  ///constructor(private modalService: NgbModal) {}

  
  public getPayment()
  {
    this.id=sessionStorage.getItem("id");
    return this.http.get<Payment[]>(this.paymentUrl+"/findPaymentByUserId/"+this.id);
  }

  public getTrainings(Pid)
  {
    return this.http.get<Training>(this.trainingUrl+"/"+Pid);
  }
  
  public Payfees(payid,amount)
  {
    return this.http.get<Payment>(this.paymentUrl+"/payfees/"+payid+"/"+amount)
  }

  

}
