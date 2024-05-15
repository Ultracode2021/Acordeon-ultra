import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router'; //  imports: [RouterOutlet],
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

type Movie = {
  name: string;
  available: number;
  quantity: number;
};

type Movies = Array<Movie>;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // add this line


})
export class AppComponent {
  title: String = 'Film Room'; //{{ title }}
  movies: Movies = [
    {
      name: 'Doctor Strange',
      available: 3,
      quantity: 0,
    },
    {
      name: 'Inside Out',
      available: 5,
      quantity: 0,
    },
  ];
  addMovieQuantity(movieName: string) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName,
    );

    this.movies[movieIndex].quantity += 1;
  }

  removeMovieQuantity(movieName: string) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName,
    );

    this.movies[movieIndex].quantity -= 1;
  }
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'thumbs-up',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/thumbs-up.svg')
    );
  }
}
