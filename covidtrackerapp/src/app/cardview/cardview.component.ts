import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }
  
  gototracker(){
    this.router.navigate(['covidtracker']);
  }

  gotoweather(){
    this.router.navigate(['']);
  }
}
