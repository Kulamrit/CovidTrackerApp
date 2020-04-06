import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {
  
  country_name ;
  infected_people_no;
  no_recovered;
  
    constructor(
      private route: ActivatedRoute,
      private http: HttpClient,
      private router: Router
    ) {}
  
  ngOnInit() {
    this.fetchPost();
  }

  route_var = this.route.snapshot.params['country'];

  fetchPost() {
    this.http
      .get('https://corona.lmao.ninja/countries/' + this.route_var)

      .subscribe(responseData => {
        this.country_name = Object.values(responseData)[0];
        this.infected_people_no = Object.values(responseData)[7];
        this.no_recovered = Object.values(responseData)[6];
      });
  }
}