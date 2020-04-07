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
  
  country ;
  Active_cases;
  Recovered_Cases;
  
    constructor(
      private route: ActivatedRoute,
      private http: HttpClient,
      private router: Router
    ) {}
  
  ngOnInit() {
    this.fetchPost();
  }
  img;
  img2;
  Total_Cases;
  Total_Deaths;
  Today_Cases;
  Today_Deaths;
  Critical_Cases;
  route_var = this.route.snapshot.params['country'];
  gotoHome(){
    this.router.navigate(['']);
  }

  fetchPost() {debugger
    this.http
      .get('https://corona.lmao.ninja/countries/' + this.route_var)

      .subscribe(responseData => {debugger
        this.country = Object.values(responseData)[0];
        this.Total_Cases = Object.values(responseData)[3];
        this.Today_Cases = Object.values(responseData)[4];
        this.Total_Deaths = Object.values(responseData)[5];
        this.Today_Deaths = Object.values(responseData)[6]; 
        this.Recovered_Cases = Object.values(responseData)[7];
        this.Active_cases = Object.values(responseData)[8];
        this.Critical_Cases = Object.values(responseData)[9];
       
        this.img = Object.values(responseData)[1];
        this.img2 = Object.values(this.img)[5];
        
      });
  }
}
