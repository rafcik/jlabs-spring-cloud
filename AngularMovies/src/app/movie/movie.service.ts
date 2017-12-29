import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "./movie.model";

@Injectable()
export class MovieService {
  private _movies: Movie[];

  constructor(private httpClient: HttpClient) {
  }

  public getMovies(): Observable<Movie[]> {
    return this.httpClient.get<any>("movies/movies")
      .map(response => response._embedded.movies)
      .do(movies => this._movies = movies);
  }

  public getMovie(index: number): Movie {
    return this._movies[index];
  }
}
