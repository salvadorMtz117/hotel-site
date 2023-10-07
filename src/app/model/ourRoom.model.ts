export interface IOurRoomModel{
  title: string;
  content:string;
}
export class OurRoomModel{
  title: string;
  content:string;
  constructor(data: IOurRoomModel){
    this.title = data.title;
    this.content = data.content;
  }
}
