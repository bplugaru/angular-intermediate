import { Component, OnInit } from '@angular/core';
import { ChuckService, Biografy } from '../services/chuck.service';

@Component({
  selector: 'app-chuck-view',
  templateUrl: './chuck-view.component.html',
  styleUrls: ['./chuck-view.component.scss']
})
export class ChuckViewComponent implements OnInit {

  public bio: Biografy
  constructor(private chuckService: ChuckService) { }

  ngOnInit() {
    this.bio = this.chuckService.getBio();
  }

}
