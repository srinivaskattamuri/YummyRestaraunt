import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CustomMaterialModule } from '../common/material.module';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';


const COMPONENTS = [LoginComponent, AboutComponent, ContactUsComponent, LogoutComponent,
  RegisterComponent, HeaderComponent, FooterComponent]
const MODULES = [CustomMaterialModule]
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MODULES
  ],
  exports: [...COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeaturesModule { }
