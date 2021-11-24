import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-nearby-card',
  templateUrl: './location-nearby-card.component.html',
  styleUrls: ['./location-nearby-card.component.scss'],
})
export class LocationNearbyCardComponent implements OnInit {
  @Input() nearbyLocation: any;
  constructor() { }

  ngOnInit() { }

}
