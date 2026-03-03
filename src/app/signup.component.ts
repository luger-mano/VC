import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  fullName = '';
  email = '';
  password = '';
  phone = '';
  showPassword = false;

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  submit() {
    // Replace with your signup integration
    console.log('signup', { fullName: this.fullName, email: this.email, password: this.password, phone: this.phone });
    alert('Cadastro enviado (demo)');
  }
}
