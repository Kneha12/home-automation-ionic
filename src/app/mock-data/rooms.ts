import {Room} from '../interfaces/room';

export const ROOMS: Room[] = [
    {
        id: 1,
        name: 'Living Room',
        deviceCount: 7,
        image: 'assets/imgs/living-room.jpg',
        selected: false,
    },
    {
         id: 2,
        name: 'Bedroom',
        deviceCount: 4,
        image: 'assets/imgs/bedroom.jpg',
        selected: true,
    },
    {
         id: 3,
        name: 'Study Room',
        deviceCount: 2,
        image: 'assets/imgs/studyroom.jpg',
        selected: false,
    },
    {
         id: 4,
        name: 'Kitchen',
        deviceCount: 1,
        image: 'assets/imgs/kitchen.jpg',
        selected: false,
    },
]