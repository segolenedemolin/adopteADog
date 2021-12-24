import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog';
import { DOGS } from '../models/Dogs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  dogs=DOGS;
  dog:any;
  private apiUrl="api/dogs";

  constructor(private httpClient:HttpClient) { }

  getDogs():Observable<Dog[]>{
    return this.httpClient.get<Dog[]>(this.apiUrl);
  }

  getDog(id:number):Observable<Dog>{
    let getSingleDogUrl=`${this.apiUrl}/${id}`;
    return this.httpClient.get<Dog>(getSingleDogUrl);
  }

  addDog(dog:Dog){
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.post<Dog>(this.apiUrl,dog,httpHeaderOption);
  }

  updateDog(dog:Dog){
    const httpHeaderOption={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.post<Dog>(this.apiUrl,dog,httpHeaderOption);
  }

  deleteDog(dog:Dog){
    let deleteDogurl=`${this.apiUrl}/${dog.id}`;
    return this.httpClient.delete<Dog>(deleteDogurl);
  }
}
