import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss']
})
export class ChuckComponent implements OnInit {

  public joke = 'Chuck Norris can text using his walkie talkie and without batteries.';

  public comment = '';
  public comments = [];
  constructor() { }

  ngOnInit() {
  }

  addComment(comment){
    this.comments.push(comment);
    this.comment = '';
  }

}
