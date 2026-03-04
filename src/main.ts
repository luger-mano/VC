import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/login.component';
import { SignupComponent } from './app/signup.component';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'home', component: AppComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
})
  .catch(err => console.error(err));
