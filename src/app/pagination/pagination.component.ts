import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonLikeComponent} from "../elements/common/button-like/button-like.component";
import {TopserviceService} from "../topservice.service";
import {films} from "../module/Interface";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import { Router } from '@angular/router';




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
  form!:FormGroup;

  servis: TopserviceService = inject(TopserviceService);

  maxLegh=500;

route: ActivatedRoute = inject(ActivatedRoute)

  router: Router = inject(Router)



  title: WritableSignal<films[]>=signal([]);

valuePage = Number(this.route.snapshot.queryParamMap.get('page'))

  ngOnInit() {
    this.updateVisiblePage()
  }

  public selectPage(page: number){
    this.valuePage = page;
    this.router.navigate(['/paginate', {page:this.valuePage}])
    this.updateVisiblePage();
  }
  updateVisiblePage(){
  this.servis.getPageFilmList(this.valuePage).subscribe((filmDataTitle)=>{
  this.title.set(filmDataTitle.results);
   });
  }
}

