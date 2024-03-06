import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  getThemes(){
    const {apiUrl} = environment;
    return this.http.get<any>(`${apiUrl}/themes`);
  }
  getPosts(limit?:number ){}
}
