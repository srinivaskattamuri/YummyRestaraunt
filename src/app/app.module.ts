import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from './common/services.module';
import { PipesModule } from './common/pipes.module';
import { CustomMaterialModule } from './common/material.module';
import { FeaturesModule } from './features/features.module';
import { CommonComponentsModule } from './common/common-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    PipesModule,
    CustomMaterialModule,
    CommonComponentsModule,
    FeaturesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
