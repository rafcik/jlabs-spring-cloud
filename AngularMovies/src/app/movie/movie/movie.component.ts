import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../movie.model";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  private movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit() {
    let movieIndex: number = parseInt(this.route.snapshot.paramMap.get("index"));
    this.movie = this.movieService.getMovie(movieIndex);
  }

}
