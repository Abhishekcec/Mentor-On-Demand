import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mentor } from '../models/mentor.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MloginService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8071/mentors';
  //private userUrl = '/api';

  public getMentor() {
    return this.http.get<Mentor[]>(this.userUrl);
  }

  public deleteMentor(mentor) {
    return this.http.delete(this.userUrl + "/"+ mentor.id);
  }

  public createMentor(mentor) {
    return this.http.post<Mentor>(this.userUrl, mentor);
  }
  
  public authenticate(userName,password)
  {
    return this.http.get<Mentor>(this.userUrl+"/"+userName+"/"+password);
  }

}
