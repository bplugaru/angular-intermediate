import { Component, OnInit } from '@angular/core';
import { ChuckService } from '../services/chuck.service';
import { Biografy } from '../services/biografy.model';
import { Movie } from '../services/movie.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chuck-edit',
  templateUrl: './chuck-edit.component.html',
  styleUrls: ['./chuck-edit.component.scss']
})
export class ChuckEditComponent implements OnInit {

  public bioFormGroup: FormGroup;
  public availableMovies = new Movie().available;

  constructor(
    private readonly chuckService: ChuckService,
    private readonly router: Router
    ) { }

  ngOnInit() {
    const bio = this.chuckService.getBio();
    this.bioFormGroup = new FormGroup({
      name: new FormControl(bio.name),
      dob: new FormControl(bio.dob),
      nationality: new FormControl(bio.nationality),
      movies: new FormControl(bio.movies)
    })
  }
  onUpdateBio(){
    this.chuckService.updateBio(this.bioFormGroup.value);
    this.router.navigate(['/view']);
  }

}
