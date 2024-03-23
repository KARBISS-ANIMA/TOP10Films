import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonLikeComponent} from "./elements/common/button-like/button-like.component";
import {TopserviceService} from "./topservice.service";
import {films} from "./module/Interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonLikeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  servis: TopserviceService = inject(TopserviceService)

  title: WritableSignal<films[]>=signal([]);

  ngOnInit() {
    this.servis.getFilmList().subscribe((filmDataTitle)=>{
      this.title.set(filmDataTitle.results);
    });
  }
}
