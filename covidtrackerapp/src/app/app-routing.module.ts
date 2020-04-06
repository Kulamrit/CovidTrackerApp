import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectcountryComponent } from './selectcountry/selectcountry.component';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';

const routes: Routes = [
  { path: '', component: SelectcountryComponent },
  { path: 'result/:country', component: CountrydetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
