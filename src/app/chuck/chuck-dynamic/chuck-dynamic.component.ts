import { Component, OnInit } from '@angular/core';
import { ChuckService } from '../services/chuck.service';
import { Movie } from '../services/movie.model';
import { Validators } from '@angular/forms';
import { verifyNameValidator } from 'src/app/shared/validators/verify-name.validator';

@Component({
  selector: 'app-chuck-dynamic',
  templateUrl: './chuck-dynamic.component.html',
  styleUrls: ['./chuck-dynamic.component.scss']
})
export class ChuckDynamicComponent implements OnInit {
  
  public config;

  constructor(private readonly chuckService: ChuckService) { }

  ngOnInit() {
    const {fullName, dob, nationality, movies} = this.chuckService.getBio();
    this.config = [
      {
        type: 'input',
        label: 'Full name',
        name: 'name',
        placeholder: 'Enter your hero name',
        value: fullName,
        disabled: true,
        validation: [
          Validators.required,
          Validators.maxLength(30),
          verifyNameValidator(/Chuck Noris/i)
        ]
      },
      {
        type: 'date',
        label: 'Date of birth',
        name: 'dob',
        placeholder: 'Date of birth',
        value: dob
      },
      {
        type: 'input',
        label: 'Nationality',
        name: 'nationality',
        placeholder: 'Enter your hero nationality',
        value: nationality,
        validation: [
          Validators.required
        ]
      },
      {
        type: 'select',
        label: 'Movies',
        name: 'movies',
        placeholder: 'The best movies',
        options: new Movie().available,
        value: movies,
        multiple: 'multiple',
        
      },
    ];
  }
}
