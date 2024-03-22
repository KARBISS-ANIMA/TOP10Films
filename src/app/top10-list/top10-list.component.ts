import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {TopserviceService} from "../topservice.service";
import {favorList, films} from "../module/Interface";
import {RouterLinkActive} from "@angular/router";
import {animationFrameProvider} from "rxjs/internal/scheduler/animationFrameProvider";

@Component({
  selector: 'app-top10-list',
  standalone: true,
  imports: [
    RouterLinkActive
  ],
  templateUrl: './top10-list.component.html',
  styleUrl: './top10-list.component.scss'
})
export class Top10ListComponent implements OnInit {

  servis: TopserviceService = inject(TopserviceService)

  title: WritableSignal<films[]>=signal([]);

  favorit: WritableSignal<films[]>=signal([]);
  ngOnInit() {
    this.servis.getFilmList().subscribe((filmDataTitle)=>{
      this.title.set(filmDataTitle.results);
    });
    this.servis.getFavoritFilmList().subscribe((filmDataTitle)=>{
      this.favorit.set(filmDataTitle.results);
    })
  }
  addFavor: favorList={media_type: '', media_id: 0, favorite: false}
  addFavorit(addid: number){
    this.addFavor= {media_type: 'movie', media_id: addid, favorite: true};
    this.servis.addFavoritFilms(this.addFavor as favorList).subscribe(() => {
      console.log("Movie added favorite list");
  });
    alert('Add in favorite list')
  }
  hasFavorite(filmId:number){
    if(this.favorit().find(x=>x.id==filmId)?.id!>1){
      return "text-fuchsia-500 fill-fuchsia-500 hover:fill-fuchsia-300";
    } else {return "text-gray-400 hover:fill-gray-400"}

  }
}
