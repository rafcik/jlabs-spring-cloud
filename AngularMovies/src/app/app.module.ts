import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MovieMainComponent} from './movie/movie-main/movie-main.component';
import {MoviesComponent} from './movie/movies/movies.component';
import {MovieComponent} from './movie/movie/movie.component';
import {MovieService} from "./movie/movie.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpInterceptorService} from "./http-interceptor.service";
import {HttpClientModule} from "@angular/common/http";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieMainComponent,
    MoviesComponent,
    MovieComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
