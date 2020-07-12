import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { LAZY_LOADED_FEATURES } from './features/lazy-load-features';
import { LoginComponent } from './features/login/login.component';
import { LogoutComponent } from './features/logout/logout.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent }
  // ...LAZY_LOADED_FEATURES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
