import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthViewModel } from '../interfaces/AuthViewModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_ENDPOINT = 'https://us-central1-pruebasmid-d40ce.cloudfunctions.net/router'
  constructor(private http: HttpClient) { }

  doLogin(data: AuthViewModel): Promise<any> {
    return new Promise((resolve, reject) => {
      try {   
        const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
        this.http.post<any>(`${this.API_ENDPOINT}/login`, { email: data.email, password: data.password }, {headers: headers}).subscribe(data => {
          // alert('Complete')
          console.log('DATA', data);
          resolve(data)
        }, err => resolve(err))
      } catch (error) {
        reject(error)
      }
    });
  }

  doRegister(data: AuthViewModel): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
        this.http.post<any>(`${this.API_ENDPOINT}/signin`, data, { headers: headers }).subscribe(data => {
          // alert('Complete')
          console.log('DATA', data);
          resolve(data);
        }, err => resolve(err))
      } catch (error) {
        reject(error)
      }
    })
    
  }
}
