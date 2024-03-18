import {inject, Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {Observable, map} from "rxjs";
import { filmListInterface } from "./module/Interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TopserviceService {

  private http: HttpClient = inject(HttpClient);
  constructor() { }

  getFilmList(): Observable<filmListInterface>{
    return this.http.get(`${environment.api}/3/movie/popular?language=ru-EU&page=1`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGMzZGE2ZTk0MTMwYjcwNWZkMzI0Nzg3MDY5ZjdjNiIsInN1YiI6IjY1ZjQ3YTkxYWE3ODk4MDE3ZGI3YzA2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eS9D6RS_D0s-63YxoS3z9hWHTAMZ2SQEaIevd8dRbAU'
      }}).pipe(
        map((response) => {
          return response as filmListInterface;
        })
    );

  }
}
