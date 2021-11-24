import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bills-card',
  templateUrl: './bills-card.component.html',
  styleUrls: ['./bills-card.component.scss'],
})
export class BillsCardComponent implements OnInit {
  @Input() bill: any;
  @Input() fromPage: any;
  @Output() billType: EventEmitter<Object> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  selectBill(bill_name: any) {
    console.log('bill_name', bill_name);
    this.billType.emit({ billType: bill_name });
  }
}
