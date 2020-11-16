import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';
import { ReposService } from '../repos.service';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
 templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:User[];
repo:Repos[];
  constructor(public serviceUser:UsersService, public serviceRepo:ReposService) { }
findGitUser(UserName){
  this.serviceUser.findUser(UserName).then(
    (success)=>{
      this.user=this.serviceUser.user;
    },
    (error)=>{
      console.log(error)
    }
  );
  this.serviceRepo.findRepo(UserName).subscribe(
    (success)=>{
      this.repo=success;
      return(this.repo)
    }
  )
}
  ngOnInit(): void {
    this.findGitUser('david12-wq');
  }

}
