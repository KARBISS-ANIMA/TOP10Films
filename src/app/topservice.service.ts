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
        Authorization: `Bearer ${environment.apikey}`
      }}).pipe(
        map((response) => {
          return response as filmListInterface;
        })
    );

  }
}
