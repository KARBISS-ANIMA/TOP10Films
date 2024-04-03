import { Routes } from '@angular/router';
import {FilmListComponent} from "./film-list/film-list.component";
import {PaginationComponent} from "./pagination/pagination.component";
import {RegistratedComponent} from "./registrated/registrated.component"
import {AuthorisationComponent} from "./authorisation/authorisation.component";

export const routes: Routes = [

          {
            path: 'filmList',
            component: FilmListComponent
          },
          {
            path: 'paginate',
            component: PaginationComponent,
          },
  {
    path: 'regis',
    component: RegistratedComponent,
  },
  {
    path: 'auth',
    component: AuthorisationComponent,
  }

];
