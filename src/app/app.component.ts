import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonLikeComponent} from "./elements/common/button-like/button-like.component";
import {TopserviceService} from "./topservice.service";
import {favorList, films} from "./module/Interface";

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
  addFavor: favorList={media_type: '', media_id: 0, favorite: false}
  addFavorit(addid: number){
    this.addFavor= {media_type: 'movie', media_id: addid, favorite: true};
    this.servis.addFavoritFilms(this.addFavor as favorList).subscribe(() => {
      console.log("Movie added favorite list");
      location.reload()
    });
    alert('Add in favorite list')
  }

  protected readonly alert = alert;
}
