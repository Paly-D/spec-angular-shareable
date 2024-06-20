import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocationCardComponent} from '../housing-location-card/housing-location-card.component';
import {HousingLocationListComponent} from '../housing-location-list/housing-location-list.component';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, HousingLocationCardComponent, HousingLocationListComponent, RouterModule],
  template: `
    

    <section>
      <div id="view" class="btn-group">
        <input type="radio" id="left" name="align" value="card" (click)="changeDisplay('card')" checked/>
        <label class="btn" for="left">Card View</label>
        <input type="radio" id="right" name="align" value="list" (click)="changeDisplay('list')"/>
        <label class="btn" for="right">List View</label>
      </div>
    </section>

    <section>
      <button type="button" class="btn btn-primary" [routerLink]="['/new']">Add a housing location</button>
    </section>

    <section>
      <div  class="row" *ngIf="display === 'card'">
        <section class="results">
            <app-housing-location-card
              *ngFor="let housingLocation of housingLocationList"
              [housingLocation]="housingLocation"
            ></app-housing-location-card>
        </section>
      </div>
      <div class="row" *ngIf="display === 'list'">
        <ul class="list-group" style="margin-top: 50px;">
          <app-housing-location-list-item
            *ngFor="let housingLocation of housingLocationList"
            [housingLocation]="housingLocation"
          ></app-housing-location-list-item>
        </ul>
      </div>
    </section>

    <section id="main" class="container py-3">
            <!-- TODO: Layout a kártyák listához -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"></div>
    </section>

  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  display: string = 'card';
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
  changeDisplay(mode: string): void {
    this.display = mode;
  }
}