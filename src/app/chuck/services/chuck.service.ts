import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biografy } from './biografy.model';


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

  private bio:Biografy;
  // {
  //   name: 'Chuck Noris',
  //   dob: new Date(1940, 2, 10),
  //   nationality: 'American',
  //   movies: [
  //     'Operatiunea Delta Force',
  //     'Lupul singuratic',
  //     'Disparut in misiune',
  //     'Drumul dragonului'
  //   ]
  // };

  constructor(private http: HttpClient) { }

  getJoke(): Observable<Joke> {
    return this.http.get<Joke>('https://api.chucknorris.io/jokes/random');

  }

  getImages(){
    return [
      'http://images02.military.com/sites/default/files/styles/full/public/media/veteran-jobs/content-images/2016/03/chucknorris.jpg',
      'https://m.media-amazon.com/images/M/MV5BNDYwYmJlNGQtN2JiZS00OGRlLWE1ZTctMzExYjkzNGMwN2FjXkEyXkFqcGdeQXVyMTI3MDk3MzQ@._V1_SX1777_CR0,0,1777,756_AL_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOWIwOTQwNWUtNDg1OC00MDEyLWIxYjgtZmMwYWIxMmNhNmVmXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg'
    ];
  }
  getBio(){
    const bio = window.localStorage.getItem('bio');
    if(bio){
      return JSON.parse(bio);
    }
    return this.bio;
  } 
  createBio(bio: Biografy) {
    window.localStorage.setItem('bio', JSON.stringify(bio));
  }
  updateBio(bio: Biografy) {
    window.localStorage.setItem('bio', JSON.stringify(bio));
  }
  deleteBio(){
    window.localStorage.removeItem('bio');
    return Promise.resolve();
  }

  getErrorMessage(field){
    let error ='';
    if(field.hasError('required')){
      error = `${field.name} is required` 
    }
    if(field.hasError('VerifyNameValidatorError')){
      error = 'Realy dude???'
    }
    return error;
  }
}
