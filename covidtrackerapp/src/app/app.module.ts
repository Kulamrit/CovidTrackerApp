import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'result/:country', component: CountrydetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountrydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
