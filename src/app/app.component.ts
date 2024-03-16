import {Component, inject, signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filmData } from "./module/Interface";
import { HttpClient } from "@angular/common/http";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private http:HttpClient=inject(HttpClient);
constructor() {
  const fetch = require('node-fetch');

  const url = 'https://api.themoviedb.org/3/account/21106310/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGMzZGE2ZTk0MTMwYjcwNWZkMzI0Nzg3MDY5ZjdjNiIsInN1YiI6IjY1ZjQ3YTkxYWE3ODk4MDE3ZGI3YzA2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eS9D6RS_D0s-63YxoS3z9hWHTAMZ2SQEaIevd8dRbAU'
    }
  };

}
   filmData: WritableSignal<filmData[]>=signal([])
  filmList(){
     return this.http.get(`${environment.api}/3/account/21106310/lists?page=1`, {
       headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGMzZGE2ZTk0MTMwYjcwNWZkMzI0Nzg3MDY5ZjdjNiIsInN1YiI6IjY1ZjQ3YTkxYWE3ODk4MDE3ZGI3YzA2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eS9D6RS_D0s-63YxoS3z9hWHTAMZ2SQEaIevd8dRbAU'
       }
     }).pipe()
  }

}
