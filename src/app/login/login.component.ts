import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  user = new User();
  err = 0;

  constructor(private authService: AuthService,
    private router: Router) { }
  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
        console.log('data',data);
        let jwToken = data.headers.get('Authorization')!;
        console.log('jwtToken',jwToken)
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.err = 1;
      }
    });
  }

}
