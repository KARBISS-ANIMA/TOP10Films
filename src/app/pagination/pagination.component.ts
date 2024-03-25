import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonLikeComponent} from "../elements/common/button-like/button-like.component";
import {TopserviceService} from "../topservice.service";
import {films} from "../module/Interface";
import {RouterOutlet} from "@angular/router";
import {numbpage} from "../module/interface-field";


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    ButtonLikeComponent,
    RouterOutlet,
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {

  servis: TopserviceService = inject(TopserviceService)

  numpage=numbpage.page
  title: WritableSignal<films[]>=signal([]);

  nextPage(){
    numbpage.page+=1;
  }
  backPage(){
    if(this.numpage===1) {
    alert("Это первая страница")
    }else {
      this.numpage -= 1;
      location.reload();
    }
  }
  ngOnInit() {
    this.servis.getPageFilmList(this.numpage).subscribe((filmDataTitle)=>{
      this.title.set(filmDataTitle.results);
    });
  }
}

