import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import { AppNavigate } from "./app-navigate/app-navigate";
import {Top10ListComponent} from "./top10-list/top10-list.component";

export const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    children:[
      {
        path: '',
        redirectTo: 'AppNavigate',
        pathMatch: "full"
      },
      {
        path:'',
        component: AppNavigate,
        children:[
          {
            path: 'top10',
            component: Top10ListComponent
          },
        ]
      }
    ]
  }
];
