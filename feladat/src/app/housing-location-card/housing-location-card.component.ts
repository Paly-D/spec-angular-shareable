import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-housing-location-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <section class="listing">
    <div class="card">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <div class="card-body">
        <h5 class="card-title">{{ housingLocation.name }}</h5>
        <p class="card-text">
          {{ housingLocation.city }}, {{ housingLocation.state }}
        </p>
      </div>
      <div class="card-footer">
        <div class="d-flex justify-content-between">
          <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
        </div>
      </div>
    </div>
  </section>
  `,
  styleUrls: ['housing-location-card.component.css'],
})
export class HousingLocationCardComponent {
  @Input() housingLocation!: HousingLocation;
}