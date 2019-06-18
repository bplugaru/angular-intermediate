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

export interface Biografy{
  name: string,
  dob: Date,
  nationality: string,
  movies: string[]
}

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  private bio:Biografy = {
    name: 'Chuck Noris',
    dob: new Date(1940, 2, 10),
    nationality: 'American',
    movies: [
      'Operatiunea Delta Force',
      'Lupul singuratic',
      'Disparut in misiune',
      'Drumul dragonului'
    ]
  };

  constructor(private http: HttpClient) { }

  getJoke(): Observable<Joke> {
    return this.http.get<Joke>('https://api.chucknorris.io/jokes/random');

  }

  getBio(){
    return this.bio;
  } 
}
