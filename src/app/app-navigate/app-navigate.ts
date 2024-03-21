import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  template: `<div>
    <div>
    <button class="m-4" routerLink="/top10">TOP 10 FILMS</button>
      <br>
    <button class="m-4" routerLink="/favorit">FAVORITE</button>
    </div>
    <router-outlet/>
  </div>`,
})
export class AppNavigate {

}
