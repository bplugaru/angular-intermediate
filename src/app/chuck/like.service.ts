import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private likes = false;
  constructor() { }

  setLike() {
    this.likes = !this.likes;
  }

  getLikes(){
    return this.likes;
  }
}
