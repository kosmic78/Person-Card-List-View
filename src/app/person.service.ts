import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personURL="https://randomuser.me/api/?results=250";
  constructor(private httpClient:HttpClient) { }
  getResults() : Observable<Person[]>{
    return this.httpClient.get<Person[]>(`${this.personURL}`)
  }
}
