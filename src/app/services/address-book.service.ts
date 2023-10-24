import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressBookService {
  private apiUrl: string = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getContact(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=10&seed=nuvalence`);
  }
}
