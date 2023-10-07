import { Component, OnInit } from '@angular/core';
import { ourroom } from 'src/app/data/ourRoom';
import { rooms } from 'src/app/data/rooms';
import { OurRoomModel } from 'src/app/model/ourRoom.model';
import { RoomsModel } from 'src/app/model/rooms.model';

@Component({
  selector: 'app-ourromm',
  templateUrl: './ourromm.component.html',
  styleUrls: []
})
export class OurrommComponent implements OnInit{

  ourRoomData!: OurRoomModel;
  roomListData!: RoomsModel[];

  ngOnInit(): void {
    this.ourRoomData = ourroom;
    this.roomListData = rooms;
  }

}
