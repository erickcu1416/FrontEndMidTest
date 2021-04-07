import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthViewModel } from 'src/app/interfaces/AuthViewModel';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  tab = 'Login';
  data: AuthViewModel = {
    email: '',
    password: '',
    name: ''
  }
  constructor(public activeModal: NgbActiveModal,
              private _authService: AuthService) {}

  ngOnInit(): void {
  }

  setTab(value: string) {
    this.tab = value;
  }

  async tryLogin() {
    if (!this.data.email || !this.data.password) {
      return alert('Invalid Data')
    }

    const res = await this._authService.doLogin(this.data);
    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Login success',
        showConfirmButton: false,
        timer: 1500
      })
      this.activeModal.dismiss('Cross click')

    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Error',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }

  }

  async tryRegister() {
    if (!this.data.email || !this.data.password || !this.data.name) {
      return alert('Invalid Data')
    }

    const res = await this._authService.doRegister(this.data);
    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Login success',
        showConfirmButton: false,
        timer: 1500
      })
      this.activeModal.dismiss('Cross click')

    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Error',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }

  }

}
