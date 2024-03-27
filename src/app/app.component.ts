import {Component} from '@angular/core';
import {ButtonLikeComponent} from "./elements/common/button-like/button-like.component";
import {RouterOutlet} from "@angular/router";
import {AppNavComponent} from "./navigate/navigate";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonLikeComponent,
    RouterOutlet,
    AppNavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
