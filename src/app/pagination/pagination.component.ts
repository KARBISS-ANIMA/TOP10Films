import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonLikeComponent} from "../elements/common/button-like/button-like.component";
import {TopserviceService} from "../topservice.service";
import {films} from "../module/Interface";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import {__await} from "tslib";





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


  page :any


  title: WritableSignal<films[]>=signal([]);


  ngOnInit() {
    this.getPageNumber().then(()=>{ return console.log('hello3')})
    console.log('hello1')
  this.route.queryParams.subscribe(params =>{
    this.page = +params['page']})
    this.updateVisiblePage().then(()=>{return console.log('update visible page over')})
  }

  async getPageNumber(){
    await this.updateVisiblePage();
    return console.log('hello2')
  }
  public selectPage(page: number){
    this.page = page;
    this.router.navigate(['/paginate'], {queryParams:{page: this.page}});
    this.updateVisiblePage().then(()=>{return console.log('update visible page over')});
  }
 async updateVisiblePage(){
  this.servis.getPageFilmList(this.page).subscribe( (filmDataTitle)=>{
   this.title.set(filmDataTitle.results)
   })
   return console.log('update visible page')
  }
}
