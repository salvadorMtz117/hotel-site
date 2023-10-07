export interface IRestaurantModel{
  name: string;
  type:string;
  description: string;
  image: string;
  daysOpen: string;
  schedule: string;
  phone: string;
  dressCode: string;
}
export class RestaurantModel{
  name: string;
  type:string;
  description: string;
  image: string;
  daysOpen: string;
  schedule: string;
  phone: string;
  dressCode: string;
  constructor(data: IRestaurantModel){
    this.name = data.name;
    this.type = data.type;
    this.description = data.description;
    this.image = data.image;
    this.daysOpen = data.daysOpen;
    this.schedule = data.schedule;
    this.phone = data.phone;
    this.dressCode = data.dressCode;
  }
}
