import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName = '';

  constructor() {
  }

  ngOnInit() {
  }

  onCreateUser(){
    this.userName = '';
  }

}
