import { Component, OnInit } from '@angular/core';
import { restaurantes_short } from 'src/app/data/restaurant-short';
import { RestaurantModel } from 'src/app/model/restaurant.model';

@Component({
  selector: 'app-restaurant-main',
  templateUrl: './restaurant-main.component.html',
  styleUrls: []
})
export class RestaurantMainComponent implements OnInit{

  restaurantData!: RestaurantModel[];

  ngOnInit(): void {
    this.restaurantData = restaurantes_short;
  }
}
