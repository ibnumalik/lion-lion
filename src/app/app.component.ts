import { InstructionsComponent } from './instructions/instructions.component';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  scrolled = false;

  constructor(private modalService: NgbModal) {}

  onWindowScroll($event) {
    if(window.pageYOffset > 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  open() {
    this.modalService.open(InstructionsComponent, {
      windowClass: 'lion'
    });
  }
}
