import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVmNGYxMzIxZWNmYzY0MTQ2Yjc5OGYiLCJkYXRlIjoiMjAyMS0wNS0wNFQwNzo1NDowNy43NTZaIiwiaWF0IjoxNjIwMTE0ODQ3fQ.7bH4ltgLBNmlKPbJ-WWwhbnaqHcAIPr6SDUlhY965D0"
  id : any
  companyname : any
  
  constructor(private http: HttpClient,
  ) { }

  loginData(data: any):Observable<any>{
    return this.http.post("http://hmaapi.kilobytetech.com/auth/login",data);
  }
  client():Observable<any>{
    var header = new HttpHeaders({
      'Authorization' : this.token,
      'Content-Type' : 'application/json'
    })
    return this.http.get("http://hmaapi.kilobytetech.com/users?pageNo=1&size=20",{
      headers: header
    })
  }
  clientDetail():Observable<any>{
    var header = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json'
    }); 
    const httpParams = new HttpParams({
      fromObject: {
        clientId: this.id,
        financialYear: "2020-2021"
      }
    })
    const options = {
      params: httpParams,
      headers:header
    }
    return this.http.get('http://hmaapi.kilobytetech.com/documents',options);
  }

  uploadFile(id:any):Observable<any>{
    var header = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json'
    });
    return this.http.put("http://hmaapi.kilobytetech.com/documents/" +id,
      {
        folder: [
          {
            file: 'https://hma-docs.s3.ap-south-1.amazonaws.com/6646b710-4e27-4728-9053-1d2103d3704f.pdf',
            preview:
              'https://hma-docs.s3.ap-south-1.amazonaws.com/7af73066-3818-4866-bb56-ae475b59fcb0.png',
          },
        ],
        status: 'COMPLETED',
      },
      {headers:header});
  }
  
}

