import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {HousingService} from '../housing.service';
import {HousingLocation} from '../housinglocation';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation.name }}</h2>
        <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation.availableUnits }}</li>
          <li>Does this location have wifi: {{ translate(housingLocation.wifi) }}</li>
          <li>Does this location have laundry: {{ translate(housingLocation.laundry) }}</li>
        </ul>
      </section>
      <section>
        <button type="button" class="btn btn-primary" (click)="onClick()">Edit entry</button>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation/* | undefined*/;
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
  onClick(){
    this.router.navigate(['details',this.route.snapshot.params['id'],'edit'])
  }
  translate(truefalse: boolean): string{
    if(truefalse){
      return "Yes";
    }
    return "No";
  }
}