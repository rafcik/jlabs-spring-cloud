import {Component, OnInit} from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../movie.model";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private movies: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }
}
