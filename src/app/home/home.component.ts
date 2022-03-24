import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { MovieCard } from '../shared/models/moviecard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieCards!:MovieCard[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    console.log('inside ngOn Init life cycle hook method')
    this.movieService.getTopGrossingMovies().subscribe(
      m => {
        this.movieCards = m;
        console.log(this.movieCards)
      }
    );
  }

}
