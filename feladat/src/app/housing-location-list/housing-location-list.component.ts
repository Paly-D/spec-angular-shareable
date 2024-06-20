import {Component, Input, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-housing-location-list-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <section class="list">
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{{ housingLocation.name }}</div>
        <div>{{ housingLocation.city }}, {{ housingLocation.state }}</div>
        <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
      </div>
    </li>
  </section>
  `,
  styleUrls: ['housing-location-list.component.css'],
})
export class HousingLocationListComponent {
  @Input() housingLocation!: HousingLocation;
}