export interface IAboutModel{
  title: string;
  shortContent:string;
  fullContent: string;
  image: string;
}
export class AboutModel{
  title:string;
  shortContent:string;
  fullContent:string;
  image:string;
  constructor(data: IAboutModel){
    this.title = data.title;
    this.fullContent = data.fullContent;
    this.shortContent = data.shortContent;
    this.image = data.image;
  }
}
