import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonLikeComponent} from "../elements/common/button-like/button-like.component";
import {TopserviceService} from "../topservice.service";
import {films} from "../module/Interface";
import {RouterOutlet} from "@angular/router";
import {numbpage} from "../module/interface-field";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    ButtonLikeComponent,
    RouterOutlet,
    ReactiveFormsModule,
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  form!:FormGroup

  servis: TopserviceService = inject(TopserviceService)

  valuePage=numbpage.page
  title: WritableSignal<films[]>=signal([]);

  ngOnInit() {
    this.updateVisiblePage()
  }

  public selectPage(page: number){
    this.valuePage = page;
    this.updateVisiblePage();
  }
  updateVisiblePage(){
  this.servis.getPageFilmList(this.valuePage).subscribe((filmDataTitle)=>{
  this.title.set(filmDataTitle.results);
});
  }

}

