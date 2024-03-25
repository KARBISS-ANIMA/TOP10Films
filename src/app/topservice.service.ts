import {inject, Injectable, Input} from '@angular/core';
import {environment} from "../environments/environment";
import {Observable, map} from "rxjs";
import {favorList, filmListInterface} from "./module/Interface";
import {HttpClient} from "@angular/common/http";
import {PaginationComponent} from "./pagination/pagination.component";

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

  getPageFilmList(numPage:number): Observable<filmListInterface>{
    return this.http.get(`${environment.api}/3/movie/popular?language=ru-EU&page=`+numPage, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apikey}`
      }}).pipe(
      map((response) => {
        return response as filmListInterface;
      })
    );
  }

  getFavoritFilmList(): Observable<filmListInterface>{
    return this.http.get(`${environment.api}/3/account/21106310/favorite/movies?language=ru-EU&page=1&sort_by=created_at.asc`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apikey}`
      }}).pipe(
      map((response) => {
        return response as filmListInterface;
      })
    );
  }

  addFavoritFilms(favorlistadded: favorList): Observable<any> {
    return this.http.post(`${environment.api}/3/account/21106310/favorite`,  favorlistadded, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apikey}`
      }});
  }

}
