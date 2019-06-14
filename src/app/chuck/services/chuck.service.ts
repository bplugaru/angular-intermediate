import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Joke {
  categories: [];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;

}


@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http: HttpClient) { }

  getJoke(): Observable<Joke> {
    return this.http.get<Joke>('https://api.chucknorris.io/jokes/random');

  }
}
