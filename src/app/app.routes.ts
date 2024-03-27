import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AppNavComponent} from "./navigate/navigate";
import {FilmListComponent} from "./film-list/film-list.component";
import {PaginationComponent} from "./pagination/pagination.component";
import {numbpage} from "./module/interface-field";

export const routes: Routes = [

          {
            path: 'filmList',
            component: FilmListComponent
          },
          {
            path: 'paginate',
            component: PaginationComponent,
            data: {page: numbpage.page}
          },

];
