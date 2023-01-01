import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './child3/child3.component';
import { Parent4Component } from './parent4/parent4.component';
import { Child4Component } from './child4/child4.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3Component,
    Parent4Component,
    Child4Component,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
