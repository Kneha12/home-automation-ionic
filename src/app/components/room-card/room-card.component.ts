import { Component, input, OnInit } from '@angular/core';
import { Room } from 'src/app/interfaces/room';
import { IonCard, IonCol, IonAvatar, IonLabel, IonNote } from "@ionic/angular/standalone";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
  imports: [IonNote, IonLabel, IonCard, RouterLink, IonCol, IonAvatar]
})
export class RoomCardComponent  implements OnInit {
 
  readonly room = input<Room>();

  constructor() { }

  ngOnInit() {}

}
