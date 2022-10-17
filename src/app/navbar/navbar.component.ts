import { Component, OnInit } from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  formModal: any;

  constructor() { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('staticBackdrop')
    );
  }
  openModal() {
    this.formModal.show();
  }
  closeModal() {
    this.formModal.hide();
  }
}

