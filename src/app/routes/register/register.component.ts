import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/api/users/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(["/mainapp"])
    }
  };

  cleanForm() {
    this.userService.userToCreate = new User()
  }

  register(form: NgForm) {
    // revisar los campos
    let data = form.value;

    console.log("entre")
    this.userService.createUser(data).subscribe((data: any) => {
      if (data) {
        localStorage.setItem('token', data.token)
        this.router.navigate(["/mainapp"])
        alert("Usuario Creado")
        return
      }else {
        alert("Error al crear el usuario")
      }
    })
    
  }

}
