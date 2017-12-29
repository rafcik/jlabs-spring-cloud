import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieMainComponent} from "./movie/movie-main/movie-main.component";
import {MoviesComponent} from "./movie/movies/movies.component";
import {MovieComponent} from "./movie/movie/movie.component";

const appRoutes: Routes = [
  {
    path: 'movies',
    component: MovieMainComponent,
    children: [
      {path: '', component: MoviesComponent},
      {path: ':index', component: MovieComponent}
    ]
  },
  {path: '**', redirectTo: 'movies'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
