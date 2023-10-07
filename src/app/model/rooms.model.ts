export interface IRoomsModel{
  title: string;
  detail:string;
  image: string;
}
export class RoomsModel{
  title: string;
  detail:string;
  image: string;
  constructor(data: IRoomsModel){
    this.title = data.title;
    this.detail = data.detail;
    this.image = data.image;
  }
}
