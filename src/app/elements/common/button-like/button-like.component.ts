import {Component, inject, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {films} from "../../../module/Interface";
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


}
