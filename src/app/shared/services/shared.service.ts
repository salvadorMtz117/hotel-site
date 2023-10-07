import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })

export class sharedService{

  public isHomeActive: boolean = false;
  public isAboutActive: boolean = false;
  public isRoomActive: boolean = false;
  public isGaleryActive: boolean = false;
  public isBlogActive: boolean = false;
  public isContactActive: boolean = false;

  menuActive(menu:string){
    if(menu == "home"){
      this.isHomeActive = true;
      this.isAboutActive = false;
      this.isRoomActive = false;
      this.isGaleryActive = false;
      this.isBlogActive = false;
      this.isContactActive = false;
    } else if (menu == "about"){
      this.isHomeActive = false;
      this.isAboutActive = true;
      this.isRoomActive = false;
      this.isGaleryActive = false;
      this.isBlogActive = false;
      this.isContactActive = false;
    } else if (menu == "room") {
      this.isHomeActive = false;
      this.isAboutActive = false;
      this.isRoomActive = true;
      this.isGaleryActive = false;
      this.isBlogActive = false;
      this.isContactActive = false;
    } else if (menu == "gallery"){
      this.isHomeActive = false;
      this.isAboutActive = false;
      this.isRoomActive = false;
      this.isGaleryActive = true;
      this.isBlogActive = false;
      this.isContactActive = false;
    } else if (menu == 'blog'){
      this.isHomeActive = false;
      this.isAboutActive = false;
      this.isRoomActive = false;
      this.isGaleryActive = false;
      this.isBlogActive = true;
      this.isContactActive = false;
    } else if (menu == 'contact'){
      this.isHomeActive = false;
      this.isAboutActive = false;
      this.isRoomActive = false;
      this.isGaleryActive = false;
      this.isBlogActive = false;
      this.isContactActive = true;
    }
  }

}
