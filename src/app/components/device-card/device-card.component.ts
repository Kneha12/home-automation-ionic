import { Component, OnInit, input } from '@angular/core';
import { Device } from 'src/app/interfaces/device';
import {
  IonCard,
  IonCol,
  IonLabel,
  IonNote,
  IonText,
  IonThumbnail,
  IonToggle,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss'],
  imports: [
    IonCard,
    IonCol,
    IonLabel,
    IonNote,
    IonText,
    IonThumbnail,
    IonToggle,
    FormsModule,
  ],
})
export class DeviceCardComponent implements OnInit {
  readonly device = input<Device>();

  constructor() {}

  ngOnInit() {}

  toggleDevice(device: Device, event: CustomEvent) {
    console.log(device, event);
  }


 getDeviceImage(name: string): string {
  const imageNameMap: { [key: string]: string[] } = {
  'ceiling-light': ['ceiling light', 'ceiling'],
    'tube-light': ['tube-light', 'tube'],
    lamp: ['lamp', 'study', 'desk'],
    'air-conditioner': ['air-conditioner', 'air-condition', 'ac'],
    'air-purifier': ['purifier', 'air-purifier'],
    fan: ['fan'],
    bulb: ['bulb', 'light', 'backlight'],
    'air-conditioner-2': ['ac'],
  };

  const lowerCaseName = name.toLowerCase();

  for (const imageName in imageNameMap) {
    const keywords= imageNameMap[imageName];
    const regex=new RegExp(keywords.map((k)=>`\\b${k}\\b`).join('|'));

    if (regex.test(lowerCaseName)) {
      return `assets/devices/${imageName.replace('-2','')}.png`;
    }
  }

  return `assets/devices/device.png`; 
}
}
