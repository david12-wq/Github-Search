import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Repos } from './repos';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
user:User[]=[];
repo:Repos[]=[];

keyUrl='https://api.github.com/users/';
token=`?access_token=${environment.key}`;

  constructor(private http:HttpClient) { }

  findUser(UserName:string){
    interface data{
      name:string;
      login:string;
      followers:number;
      following:number;
      created_at:Date;
      avatar_url:any;
    }
    return new Promise((resolve,reject)=>{

      this.user=[];
      this.http.get<data>(this.keyUrl+UserName+this.token).toPromise().then(
        (res)=>{
          this.user.push(res);
          resolve();
        },
        (error)=>{
          reject();
        }
      );
    });
  }
}
