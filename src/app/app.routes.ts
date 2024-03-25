import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AppNavComponent} from "./navigate/navigate";
import {FilmListComponent} from "./film-list/film-list.component";
import {PaginationComponent} from "./pagination/pagination.component";

export const routes: Routes = [

          {
            path: 'filmList',
            component: FilmListComponent
          },
          {
            path: 'paginate',
            component: PaginationComponent
          }

];
