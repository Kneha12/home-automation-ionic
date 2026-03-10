import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonRow, IonCol } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ROOMS } from 'src/app/mock-data/rooms';
import { Room } from 'src/app/interfaces/room';
import { Device } from 'src/app/interfaces/device';
import { DEVICES } from 'src/app/mock-data/devices';
import { DeviceCardComponent } from 'src/app/components/device-card/device-card.component';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.page.html',
  styleUrls: ['./room-detail.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, DeviceCardComponent]
})
export class RoomDetailPage implements OnInit {

  room = signal<Room | null>(null);
  devices = signal<Device[]>([]);

  private route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
    const roomId= this.route.snapshot.paramMap.get('id');
    if(roomId){
      this.loadData(+roomId);
    }
  }
loadData(roomId: number){
  const room = ROOMS.find(room=> room.id ===roomId);
  if(!room){
    console.error('Room not found with id', roomId);
    return;
  }
  this.room.set(room);
  this.devices.set(DEVICES);
}
}
