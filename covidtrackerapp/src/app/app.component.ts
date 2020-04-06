import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

onCreatePost(postData: { title: string; content: string }) {
    //Send Http request
    this.http
      .post(
        ' https://angular-training-e3b94.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
    //console.log(postData);
  }

  selectChangeHandler(event) {
    console.log(event.target.value);
    this.country = event.target.value;
  }
  
  orders: any[] = [
    { id: '1', name: 'Afghanistan' },
    { id: '2', name: 'Alaska' },
    { id: '3', name: 'Austria' },
    { id: '4', name: 'Australia' }
  ];
}

