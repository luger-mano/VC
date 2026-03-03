import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login.component';
import { SignupComponent } from './app/signup.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
})
  .catch(err => console.error(err));
