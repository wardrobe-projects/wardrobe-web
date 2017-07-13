import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loading = false;
 
  constructor (private authService: AuthService) { 
  
  }

  ngOnInit() {
  }

  login () {
    this.loading = true;
    this.authService.login(this.username, this.password)
  }
}


