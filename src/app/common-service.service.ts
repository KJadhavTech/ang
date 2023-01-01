import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

}
