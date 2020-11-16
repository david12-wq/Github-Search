import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
UserName:string;
@Output()searchEmitter= new EventEmitter<any>();
  constructor() { }

  searchUser(){
    this.searchEmitter.emit(this.UserName);
  }

  ngOnInit(): void {
  }

}
