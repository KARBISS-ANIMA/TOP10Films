import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopserviceService } from "./topservice.service";
import {filmDataInterface, titleFilm} from "./module/Interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  servis: TopserviceService = inject(TopserviceService)

  title: WritableSignal<filmDataInterface[]>=signal([]);
ngOnInit() {
    this.servis.getFilmList().subscribe((filmDataTitle)=>{
      this.title.set(filmDataTitle.title);
    })
}


}
