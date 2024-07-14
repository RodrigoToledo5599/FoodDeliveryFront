import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../../../api/api';
import { Prato } from './interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class PratoServices{
    private urlprato =  BASE_URL + 'api/prato/';
    constructor(
        private http:HttpClient 
    ){}

    LoadPratoPage(token:string, pratoId:string |null):Observable<Prato>{
        var header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.get<Prato>(this.urlprato + pratoId ,{headers:header})
    }


}

