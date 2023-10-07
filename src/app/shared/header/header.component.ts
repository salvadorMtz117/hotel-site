import { Component, OnInit } from '@angular/core';
import { sharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit{
  isAboutActive:boolean = false;
  isHomeActive: boolean = true;
  isRoomActive: boolean = false;
  isGaleryActive: boolean = false;
  isBlogActive: boolean = false;
  isContactActive: boolean = false;

  constructor(private _service: sharedService){}

  ngOnInit(): void {
    this.isAboutActive = this._service.isAboutActive;
    this.isHomeActive = this._service.isHomeActive;
    this.isRoomActive = this._service.isRoomActive;
    this.isGaleryActive = this._service.isGaleryActive;
    this.isBlogActive = this._service.isBlogActive;
    this.isContactActive = this._service.isContactActive;
  }


}
