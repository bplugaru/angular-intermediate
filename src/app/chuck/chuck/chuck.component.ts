import { Component, OnInit, Injector } from '@angular/core';
import { Joke, ChuckService } from '../services/chuck.service';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss']
})
export class ChuckComponent implements OnInit {
  public joke: Joke;

  public comment = '';
  public comments = [];

  public like = false;
  public images;
  
  constructor(
    private chuckService: ChuckService,
    private injector: Injector
  ) { }

  ngOnInit() {
    this.getJoke();
    this.getImages();
  }

  getJoke() {
    this.chuckService.getJoke().subscribe(joke => this.joke = joke);
  }

  getImages() {
    this.images = this.chuckService.getImages();
  }
  addComment(comment) {
    this.comments.push(comment);
    this.comment = '';
  }

  setLike() {
    const cs = this.injector.get<LikeService>(LikeService);
    cs.setLike();
    this.like = cs.getLikes();
  }
}
