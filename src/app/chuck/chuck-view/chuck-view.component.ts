import { Component, OnInit, Injector } from '@angular/core';
import { ChuckService, Joke } from '../services/chuck.service';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-chuck-view',
  templateUrl: './chuck-view.component.html',
  styleUrls: ['./chuck-view.component.scss']
})
export class ChuckViewComponent implements OnInit {

  public joke: Joke;

  public comment = '';
  public comments = [];

  public like = false;
  constructor(
    private chuckService: ChuckService,
    private injector: Injector
  ) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.chuckService.getJoke().subscribe(joke => this.joke = joke);
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
