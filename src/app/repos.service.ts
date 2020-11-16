import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  repo:Repos[]=[];

  keyUrl='https://api.github.com/users/';
token=`?access_token=${environment.key}`;

  constructor(public http:HttpClient) { }

  findRepo(UserName:string): Observable<any>{
    return this.http.get(this.keyUrl+UserName+ '/repos'+this.token)
  }
}
