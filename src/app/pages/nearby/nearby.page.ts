import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.page.html',
  styleUrls: ['./nearby.page.scss'],
})
export class NearbyPage implements OnInit {
  nearBys: any = [
    { id: 1, name: 'Shoprite', location: 'Ikeja City Mall, Ikeja, Lagos State', best_offer: true, image: 'shoprite_logo.png', review: '(895 reviews)' },
    { id: 2, name: 'Domino’s Pizza', location: 'Ikeja Junction, Ikeja, Lagos State', best_offer: false, image: 'domino_logo.png', review: '(895 reviews)' },
    { id: 3, name: 'Pinkberry', location: 'Ikeja Junction, Ikeja, Lagos State', best_offer: true, image: 'cussons.png', review: '(895 reviews)' },
    { id: 4, name: 'Buy 4 Less Minimart', location: 'Ikeja Junction, Ikeja, Lagos State', best_offer: false, image: 'buy4less.png', review: '(895 reviews)' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
