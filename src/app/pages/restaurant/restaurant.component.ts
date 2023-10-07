import { Component, OnInit } from '@angular/core';
import { restaurantes_full } from 'src/app/data/restaurant-full';
import { RestaurantModel } from 'src/app/model/restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: []
})
export class RestaurantComponent implements OnInit {

  restaurantData!: RestaurantModel[];

  ngOnInit(): void {
    this.restaurantData = restaurantes_full;
  }

}
