import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  orders: any[] = [
    { id: '1', name: 'Afghanistan' },
    { id: '2', name: 'Alaska' },
    { id: '3', name: 'Austria' },
    { id: '4', name: 'Australia' }
  ];
}

