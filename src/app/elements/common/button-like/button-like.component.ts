import {Component, inject, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {favorList, films} from "../../../module/Interface";
import {TopserviceService} from "../../../topservice.service";

@Component({
  selector: 'app-button-like',
  standalone: true,
  imports: [],
  templateUrl: './button-like.component.html',
  styleUrl: './button-like.component.scss'
})
export class ButtonLikeComponent implements OnInit{

  @Input() filmId=0;

  servis: TopserviceService = inject(TopserviceService)

  favorit: WritableSignal<films[]>=signal([]);

  ngOnInit() {
    this.servis.getFavoritFilmList().subscribe((filmDataTitle)=>{
      this.favorit.set(filmDataTitle.results);
    })
  }
  hasFavorite(filmId:number){
    if(this.favorit().find(x=>x.id==filmId)?.id!>1){
      return true;
    } else {return false}

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

}
