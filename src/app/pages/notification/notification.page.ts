import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notifications: any = [{
    date: 'Today', data: [
      { id: 1, name: 'Shoprite', description: 'Good Night, Johndoe! We noticed that you’re passing by our restaurants, so come visit us and take a look at our coupons!', image: 'shoprite_logo.png' }]
  },
  {
    date: 'Jan 05', data: [
      { id: 2, name: 'Domino’s Pizza', description: 'Good Morning Johndoe! We have a lot of new offers to you. Stop by your favorite restaurants to enjoy it!', image: 'domino_logo.png' },
      { id: 3, name: 'Pinkberry', description: 'Happy New Year Mafalda! “Tomorrow is the first blank page of a 365 page book. Write a good one”.', image: 'cussons.png' }],
  },
  {
    date: "Jan 10", data: [
      { id: 4, name: 'Buy 4 Less Minimart', description: 'Happy Birthday, Johndoe! Stop by our outlets and enjoy a free beverage to help you celebrate your birthday!', image: 'buy4less.png' }
    ]
  }];
  constructor() { }

  ngOnInit() {
  }

}
