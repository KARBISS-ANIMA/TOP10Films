import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonLikeComponent} from "../elements/common/button-like/button-like.component";
import {TopserviceService} from "../topservice.service";
import {films, numberPage} from "../module/Interface";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import { tap } from 'rxjs/operators'
import {subscribe} from "node:diagnostics_channel";
import * as querystring from "querystring";




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


  page = Number(this.route.snapshot.queryParamMap.get('page'))



  title: WritableSignal<films[]>=signal([]);


  ngOnInit() {

  tap(page =>{
    page = Number(this.route.snapshot.paramMap.get('page'))
  })
    this.updateVisiblePage()
  }

  public selectPage(page: number){
    this.page = page;
    this.router.navigate(['/paginate'], {queryParams:{page: this.page}})
    this.updateVisiblePage();
  }
  updateVisiblePage(){
  this.servis.getPageFilmList(this.page).subscribe((filmDataTitle)=>{
  this.title.set(filmDataTitle.results);
   });
  }
}

