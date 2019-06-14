import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Joke {
  categories: [];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;

}

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss']
})
export class ChuckComponent implements OnInit {
  public joke: Joke;

  public comment = '';
  public comments = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke(){
    this.http.get('https://api.chucknorris.io/jokes/random').subscribe( (j: Joke) => this.joke = j);

  }

  addComment(comment){
    this.comments.push(comment);
    this.comment = '';
  }

}
