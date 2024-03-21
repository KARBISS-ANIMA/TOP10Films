import {Component, inject, signal, WritableSignal} from '@angular/core';
import {TopserviceService} from "../topservice.service";
import {films} from "../module/Interface";

@Component({
  selector: 'app-favorit-list',
  standalone: true,
  imports: [],
  templateUrl: './favorit-list.component.html',
  styleUrl: './favorit-list.component.scss'
})
export class FavoritListComponent {

  servis: TopserviceService = inject(TopserviceService)

  favorit: WritableSignal<films[]>=signal([]);
  ngOnInit() {
    this.servis.getFavoritFilmList().subscribe((filmDataTitle)=>{
      this.favorit.set(filmDataTitle.results);
    })
  }
}
