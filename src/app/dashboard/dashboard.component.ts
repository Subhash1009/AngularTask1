import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  users = [
    { name: 'TomCruise', movie: 'Mission Impossible' },
    { name: 'Wentworth Miller', movie: 'Prison Break' },
    { name: 'Grant Gustin', movie: 'Flash' },
    { name: 'Stephen Amell', movie: 'Arrow' },
  ];
} 