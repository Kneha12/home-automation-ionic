import { Component, OnInit } from '@angular/core';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonAvatar, IonImg, IonItem, IonLabel, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonGrid, IonRow, IonCol, IonItemDivider } from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {cloudOutline} from 'ionicons/icons';

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
    IonItem, IonText, IonRow]
})

export class HomePage implements OnInit {

  constructor() {
    addIcons({cloudOutline});
  }

  ngOnInit() {}

}