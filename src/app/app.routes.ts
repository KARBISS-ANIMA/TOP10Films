import { Routes } from '@angular/router';
import {FilmListComponent} from "./film-list/film-list.component";
import {PaginationComponent} from "./pagination/pagination.component";

export const routes: Routes = [

          {
            path: 'filmList',
            component: FilmListComponent
          },
          {
            path: 'paginate',
            component: PaginationComponent,
          },

];
