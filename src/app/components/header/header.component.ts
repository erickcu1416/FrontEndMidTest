import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  openModal() {
    const modalRef = this.modalService.open(ModalFormComponent);
    modalRef.componentInstance.name = 'World';
  }

}
