import {Component, Input, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {HousingService} from '../housing.service';
import {HousingLocation} from '../housinglocation';
import { FormsModule } from '@angular/forms';
import { InputService } from '../input.service';
import { NgbModal, NgbModule, NgbProgressbarModule, NgbAlertModule, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,
     NgbModule, NgbProgressbarModule, NgbAlertModule, NgbAlert
    ],
  template: `
    <article>
      <img *ngIf="housingService.contains(housingLocation)"
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      
      <section class="listing-variables">
        <div *ngIf="housingLocation">
        <div class="listing-heading">{{housingLocation.name | uppercase}}</div>
          <div>
            <label for="housing-location-name">Housing location's name: </label>
            <input type="text" id="housing-location-name" [(ngModel)]="housingLocation.name">
          </div>
          <div>
            <label for="housing-location-city">Housing location's city: </label>
            <input type="text" id="housing-location-city" [(ngModel)]="housingLocation.city">
          </div>
          <div>
            <label for="housing-location-state">Housing location's state: </label>
            <input type="text" id="housing-location-state" [(ngModel)]="housingLocation.state">
          </div>
          <div>
            <label for="housing-location-units">Units available at this location: </label>
            <input type="number" id="housing-location-units" [(ngModel)]="housingLocation.availableUnits">
          </div>
          <div>
            <label for="housing-location-wifi">Does this location have wifi: </label>
            <input type="checkbox" id="housing-location-wifi" [(ngModel)]="housingLocation.wifi">
          </div>
          <div>
            <label for="housing-location-laundry">Does this location have laundry: </label>
            <input type="checkbox" id="housing-location-laundry" [(ngModel)]="housingLocation.laundry">
          </div>
          <div>
            <label for="housing-location-photo">URL of image of housing location: </label>
            <input type="text" id="housing-location-photo" [(ngModel)]="housingLocation.photo">
          </div>
        </div>
        
      </section>
      
      <section>
        <button *ngIf="housingService.contains(housingLocation)" type="button" class="btn btn-primary" (click)="onSaveClick()">Save changes</button>
        <button *ngIf="housingService.contains(housingLocation)" type="button" class="btn btn-primary" (click)="onDeleteClick()">Delete entry</button>

        <button *ngIf="!housingService.contains(housingLocation)" type="button" class="btn btn-primary" (click)="onSaveClick()">Create location</button>
        <button *ngIf="!housingService.contains(housingLocation)" type="button" class="btn btn-primary" (click)="onCancelClick()">Cancel</button>
        
      </section>
    </article>
  `,
  styleUrls: ['./modification.component.css'],
})

/*<ngb-alert type="success" [dismissible]="false">
          Bootstrap is working!
        </ngb-alert>
        
        [routerLink]="['/details', housingLocation.id]"*/

export class ModificationComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  housingService = inject(HousingService);
  inputService = inject(InputService);
  @Input() housingLocation: HousingLocation/* | undefined*/;
  constructor(private modalService: NgbModal) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
  onSaveClick() {
    this.housingService.save(this.housingLocation);
    this.router.navigate(['details',this.housingLocation.id]);
    }
  onDeleteClick() {
    this.openDeleteModal();
  }
  onCancelClick() {
    this.router.navigateByUrl('');
  }
  openDeleteModal() {
    let modal = this.modalService.open(DeleteModalComponent, {backdrop: 'static', centered: true});
    (modal.componentInstance as DeleteModalComponent).
    initParameters({
      housingLocation: this.housingLocation
    }, {
      delete: ()=>{
      modal.close();
      this.housingService.remove(this.housingLocation);
      this.router.navigateByUrl('');
      },
      return: ()=>{
        modal.close();
        }
    });
  }
}