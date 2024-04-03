import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import PocketBase from 'pocketbase';

@Component({
  selector: 'app-registrated',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './registrated.component.html',
  styleUrl: './registrated.component.scss'
})
export class RegistratedComponent implements OnInit{

  formbilder: FormBuilder = inject(FormBuilder)

  formreg = this.formbilder.group({
    email: this.formbilder.control('', [Validators.required, Validators.email]),
    userName: this.formbilder.control('', [Validators.required]),
    password: this.formbilder.control('', [Validators.required]),
  })

  ngOnInit() {}
  
  async registr(){
    if (this.formreg.invalid){
      alert('Не все поля заполненны или заполненны не правильно')
    }else {
      const data ={
        "username": this.formreg.get('userName')?.value,
        "email": this.formreg.get('email')?.value,
        "emailVisibility": true,
        "password": this.formreg.get('password')?.value,
        "passwordConfirm": this.formreg.get('password')?.value,
        "name": "test"
      }
      const pb = new PocketBase('https://base.ownfocus.pro');
      const record = await pb.collection('users').create(data);
      return console.log(record)
    }
  }
}
