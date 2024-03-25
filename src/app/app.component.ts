import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonLikeComponent} from "./elements/common/button-like/button-like.component";
import {TopserviceService} from "./topservice.service";
import {films} from "./module/Interface";
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
