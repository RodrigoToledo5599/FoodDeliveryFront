import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../../../api/api';
import { Serving } from './interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class ServingServices{
    private urlserving =  BASE_URL + 'api/serving/';
    constructor(
        private http:HttpClient 
    ){}

    LoadServingPage(token:string, servingId:string |null):Observable<Serving>{
        var header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.get<Serving>(this.urlserving + servingId ,{headers:header})
    }


}

