import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Training } from '../models/training.model';
import { User } from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainingService {

  training: Training[];
  id: String;
  mid: String;
  
  constructor(private http:HttpClient) {}

  private trainingUrl = 'http://localhost:8071/training';
  private userUrl = 'http://localhost:8071/users';
  //private userUrl = '/api';

  public getTraining() {
    this.id=sessionStorage.getItem("id");
    
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByUsersId/"+this.id);
  }
  
  public getTraining1() {
    return this.http.get<Training[]>(this.trainingUrl);
  }
  public getUserTraining() {
    this.id=sessionStorage.getItem("id");
    alert(this.userUrl+"/"+this.id);
    return this.http.get<User[]>(this.userUrl+"/"+this.id);
  }
  public getTrainingByUser() {
    this.id=sessionStorage.getItem("id");
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByUsersId/"+this.id);
  }

  public getTrainingByMentor() {
    this.mid=sessionStorage.getItem("mid");
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByMentorId/"+this.mid);
  }

  public deleteTraining(training) {
    return this.http.delete(this.userUrl + "/"+ training.id);
  }

  public createTraining(training) {
    return this.http.post<Training>(this.trainingUrl, training);
  }
  public trainingid(id)
  {
    return this.http.get<Training>(this.trainingUrl+"/"+id);
  }
  public getTrainings(tid)
  {
    alert(this.trainingUrl+"/"+tid);
    return this.http.get<Training>(this.trainingUrl+"/"+tid);
  }

}
