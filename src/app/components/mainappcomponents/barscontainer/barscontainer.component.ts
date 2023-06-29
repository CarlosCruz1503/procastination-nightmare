import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/users/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-barscontainer',
  templateUrl: './barscontainer.component.html',
  styleUrls: ['./barscontainer.component.css']
})
export class BarscontainerComponent {
  constructor(public userService: UserService, public router: Router){}
  @Input() selection: string = "calendar"
  login = false

  ngOnInit(): void {
    this.login = this.userService.isLoggedIn()
    console.log(this.userService.isLoggedIn())
    if (!this.login){
      this.router.navigate(["/login"])
    }
  }
  logOut(){
    localStorage.removeItem('token') 
    this.router.navigate(["/home"])
  }
}
