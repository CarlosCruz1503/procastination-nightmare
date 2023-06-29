import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/api/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public userService: UserService, public router: Router) {

  }

  ngOnInit() {
    if (this.userService.isLoggedIn()){
      this.router.navigate(["/mainapp"])
    }
  };

  login(form: NgForm) {

    let data = form.value

    this.userService.login(data).subscribe((data: any) => {
      localStorage.setItem('token', data.token)
      this.router.navigate(["/mainapp"])
    }, (err: any) => {
      alert("Error al inciar sesión")
    })


  }

}