import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../../../api/api';
import { Serving } from './interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  urlhome = BASE_URL + 'api/home';
  urlserving = BASE_URL + 'serving/';
  constructor(
    private http: HttpClient
  ){}

  loadHomePage(token:string):Observable<Serving[]> {
    var header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Serving[]>(this.urlhome , {headers: header})
  }

}

