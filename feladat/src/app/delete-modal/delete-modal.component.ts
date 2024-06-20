import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [NgbModule],
  template: `
    <div class="modal-body">
    <h2>Deleting entry. Are you sure?</h2>
    <section class="section">
    <button type="button" ngbAutofocus class="btn btn-success" style="width: 50%" (click)="return.emit()">Cancel</button>
    <button type="button" class="btn btn-danger" style="width: 50%" (click)="delete.emit()">Proceed</button>
    </section>
</div>

  `,
  styleUrls: ['delete-modal.component.css'],
})
export class DeleteModalComponent {
  @Input()
  housingLocation!: HousingLocation;

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  return = new EventEmitter<void>();

  constructor(module: NgbModule){
    
  }

  initParameters(inputs: {housingLocation: HousingLocation}, outputs: { delete: (...args: any[]) => any, return: (...args: any[]) => any}){
    this.housingLocation = inputs["housingLocation"];

    this.delete.subscribe(outputs["delete"]);
    this.return.subscribe(outputs["return"]);
  }
}
