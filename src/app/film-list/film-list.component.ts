import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonLikeComponent} from "../elements/common/button-like/button-like.component";
import {TopserviceService} from "../topservice.service";
import {films} from "../module/Interface";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [
    ButtonLikeComponent,
    RouterOutlet
  ],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class FilmListComponent implements OnInit {

  servis: TopserviceService = inject(TopserviceService)

  title: WritableSignal<films[]>=signal([]);

  ngOnInit() {
    this.servis.getFilmList().subscribe((filmDataTitle)=>{
      this.title.set(filmDataTitle.results);
    });
  }
}
