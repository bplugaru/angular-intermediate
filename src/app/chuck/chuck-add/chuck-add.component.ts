import { Component, OnInit } from '@angular/core';
import { Movie } from '../services/movie.model';
import { Biografy } from '../services/biografy.model';
import { ChuckService } from '../services/chuck.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chuck-add',
  templateUrl: './chuck-add.component.html',
  styleUrls: ['./chuck-add.component.scss']
})
export class ChuckAddComponent implements OnInit {

  public bio = new Biografy();
  public availableMovies = new Movie().available;
  constructor(
    private readonly chuckService: ChuckService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSaveBio() {
    this.chuckService.setBio(this.bio);
    this.router.navigate(['/view'])
  }

}
