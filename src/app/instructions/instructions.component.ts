import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InstructionsComponent{
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }
}
