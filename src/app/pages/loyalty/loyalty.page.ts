import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.page.html',
  styleUrls: ['./loyalty.page.scss'],
})
export class LoyaltyPage implements OnInit {
  loyalties: any = [
    { id: 1, name: 'Unilever Global Company', image: 'Unilever.png' },
    { id: 2, name: 'Oral B Toothpaste', image: 'oralB.png' },
    { id: 3, name: 'PZ Cussons plc', image: 'cussons.png' },
    { id: 4, name: 'Coca-Cola Bottling Company', image: 'cocaCola.png' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
