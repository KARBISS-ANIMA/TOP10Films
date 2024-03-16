import {inject, Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {Observable, map} from "rxjs";
import { filmDataInterface } from "./module/Interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TopserviceService {

  private http: HttpClient = inject(HttpClient);
  constructor() { }

  getFilmList(): Observable<filmDataInterface>{
    return this.http.get(`${environment.api}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGMzZGE2ZTk0MTMwYjcwNWZkMzI0Nzg3MDY5ZjdjNiIsInN1YiI6IjY1ZjQ3YTkxYWE3ODk4MDE3ZGI3YzA2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eS9D6RS_D0s-63YxoS3z9hWHTAMZ2SQEaIevd8dRbAU'
      }}).pipe(
        map((response) => {
          return response as filmDataInterface;
        })
    );

  }
}
