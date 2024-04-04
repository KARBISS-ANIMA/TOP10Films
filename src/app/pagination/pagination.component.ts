import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonLikeComponent} from "../elements/common/button-like/button-like.component";
import {TopserviceService} from "../topservice.service";
import {films, items} from "../module/Interface";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import PocketBase, {LocalAuthStore} from 'pocketbase';
import {authToken} from "../module/interface-field";


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

  servis: TopserviceService = inject(TopserviceService);

  maxLegh=500;

  route: ActivatedRoute = inject(ActivatedRoute)

  router: Router = inject(Router)

  page :any

  List: WritableSignal<items[]>=signal([]);
  async getSchedules(){
    const authStore = LocalAuthStore;
    console.log(authStore)
    const pb = new PocketBase('https://base.ownfocus.pro');
    const result = await pb.collection('schedules').getList(1, 20, { });
    this.List.set(result.items);
    return console.log(result.items)
  }
  schedules(schedulesItem:any){
    return schedulesItem.title
  }

  title: WritableSignal<films[]>=signal([]);

  ngOnInit() {
    this.getSchedules().then(()=>{ return console.log('get schedules')})
    console.log(authToken.token)
  this.route.queryParams.subscribe(params =>{
    this.page = +params['page']
    return console.log('query param fin')
  })
    this.updateVisiblePage().then(()=>{return console.log('update visible page over')})
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
