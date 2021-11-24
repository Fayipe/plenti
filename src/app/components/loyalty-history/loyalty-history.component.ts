import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loyalty-history',
  templateUrl: './loyalty-history.component.html',
  styleUrls: ['./loyalty-history.component.scss'],
})
export class LoyaltyHistoryComponent implements OnInit {
  @Input() loyalties: any;

  constructor() { }

  ngOnInit() {}

}
