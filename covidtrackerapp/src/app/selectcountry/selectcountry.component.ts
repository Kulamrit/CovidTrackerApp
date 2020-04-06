import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectcountry',
  templateUrl: './selectcountry.component.html',
  styleUrls: ['./selectcountry.component.css']
})
export class SelectcountryComponent implements OnInit {

  users : any; //for list of users
  country;
  constructor(private http:HttpClient , private router: Router){}
  ngOnInit(){
    let resp= this.http.get("https://corona.lmao.ninja/countries");
    resp.subscribe((data)=> this.users=data);
  }

  nextPage(){
    
      this.router.navigate(['/result', this.country]);
    
  }


  selectChangeHandler(event) {
    console.log(event.target.value);
    this.country = event.target.value;
  }
  
}

