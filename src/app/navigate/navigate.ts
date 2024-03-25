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
  <div>
  <button class="b" routerLinkActive="" routerLink="/filmList">ALL FILMS</button>
  <button routerLink="/paginate">PAGINATION FILMS</button>
</div>
  <router-outlet/>
  `
})

export class AppNavComponent {
}
