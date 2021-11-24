import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NOTIFICATION } from '../../pages/pages.constants';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss'],
})
export class HeaderContainerComponent implements OnInit {
  @Input() profileImage: boolean;
  @Input() backBtn: boolean;
  @Input() title: string;
  @Input() logo: boolean;
  @Input() notifBell: boolean;

  constructor(private router: Router) { }

  ngOnInit() { }
  gotoNotification() {
    this.router.navigate([NOTIFICATION]);
  }
}
