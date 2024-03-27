import {Component} from "@angular/core";
import {ButtonLikeComponent} from "../elements/common/button-like/button-like.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    ButtonLikeComponent,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  template: `
  <ul>
  <li><a routerLinkActive="text-green-600" routerLink="/filmList">ALL FILMS</a></li>
  <li><a routerLinkActive="text-green-600" [routerLink]="['/paginate']" [queryParams]="{page:1}">PAGINATION FILMS</a></li>
</ul>
  <router-outlet/>
  `
})

export class AppNavComponent {
}
