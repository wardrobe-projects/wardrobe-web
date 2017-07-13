import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'



@Injectable()
export class AuthService {
  
  constructor(private http: Http) { }

  login(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    console.log('service login')
    return this.http.post('http://localhost:3000/signin', { username: username, password: password }, { headers: headers })
      .map((response: Response) => {
    })
  }
}
