import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  submit() {
    // Placeholder — integrate with your auth service
    console.log('login', { email: this.email, password: this.password });
    alert('Login submitted (demo)');
  }
}
