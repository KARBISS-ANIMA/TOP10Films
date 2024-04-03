import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import PocketBase from 'pocketbase';

@Component({
  selector: 'app-authorisation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './authorisation.component.html',
  styleUrl: './authorisation.component.scss'
})
export class AuthorisationComponent implements OnInit{

  formbilder: FormBuilder = inject(FormBuilder)

  formAuth = this.formbilder.group({
    email: this.formbilder.control('', [Validators.required, Validators.email]),
    userName: this.formbilder.control('', [Validators.required]),
    password: this.formbilder.control('', [Validators.required]),
  })

  async auth(){
    if (this.formAuth.invalid){
      alert('Не все поля заполненны или заполненны не правильно')
    }else {
      const name = String(this.formAuth.get('userName')?.value);
      const email =  String(this.formAuth.get('email')?.value);
      const password = String(this.formAuth.get('password')?.value);
      const pb = new PocketBase('https://base.ownfocus.pro');
      const store = await pb.collection('users').authWithPassword(email, password);
      return console.log(store)
    }
  }
  ngOnInit() {}
}
