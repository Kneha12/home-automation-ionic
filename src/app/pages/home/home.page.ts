import { ROOMS } from './../../mock-data/rooms';
import { Component, OnInit, signal } from '@angular/core';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonAvatar, IonImg, IonItem, IonLabel, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonGrid, IonRow, IonCol, IonItemDivider } from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {cloudOutline} from 'ionicons/icons';
import { RoomCardComponent } from 'src/app/components/room-card/room-card.component';
import { Room } from 'src/app/interfaces/room';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonItemDivider, IonCol, IonGrid, IonIcon, IonCard, IonLabel,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonAvatar,
    IonItem, IonText, IonRow, RoomCardComponent]
})

export class HomePage implements OnInit {

  rooms = signal<Room[]>([]);

  constructor() {
    addIcons({cloudOutline});
  }

  ngOnInit() {
    this.rooms.set(ROOMS);
  }

}