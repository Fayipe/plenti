import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-amounts-card',
  templateUrl: './amounts-card.component.html',
  styleUrls: ['./amounts-card.component.scss'],
})
export class AmountsCardComponent implements OnInit {
  @Input() more: any;
  @Input() amount: any;
  @Output() amountSelected: EventEmitter<any> = new EventEmitter();
  itemSelected: Number = null;
  constructor() { }

  ngOnInit() { }
  onItemClicked(data) {
    console.log('data clciked', data);
    this.itemSelected = null;
    console.log('data itemSelected', this.itemSelected);
    this.itemSelected = data.id;
    this.amountSelected.emit(data)
  }
}
