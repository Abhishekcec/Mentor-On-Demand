import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mentor } from '../models/mentor.model';
import { Training } from '../models/training.model';
import { Technology } from '../models/technology.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainerService {
  mid: string;
  constructor(private http:HttpClient) {}

  private mentorUrl = 'http://localhost:8071/mentors';
  private trainingUrl = 'http://localhost:8071/training';
  private technologyUrl='http://localhost:8071/technology';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Mentor[]>(this.mentorUrl);
  }
  public getMentor(){
    this.mid=sessionStorage.getItem("mid");
   
    return this.http.get<Mentor[]>(this.mentorUrl+"/"+this.mid);
  }
  public deleteUser(user) {
    return this.http.delete(this.mentorUrl + "/"+ user.id);
  }
  public getTraining() {
    this.mid=sessionStorage.getItem("mid");
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByMentorIdAndStatusEquals/"+this.mid+"/in progress");
  }
  public createUser(user) {
    return this.http.post<Mentor>(this.mentorUrl, user);
  }
  public getTrainingByMentor(){
    return this.http.get<Mentor[]>(this.mentorUrl);
  }

  public createTraining(training) {
    return this.http.post<Training>(this.trainingUrl, training);
  }

  public getTechnology(){
    return this.http.get<Technology[]>(this.technologyUrl);
  }
}
