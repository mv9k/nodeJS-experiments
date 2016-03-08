
const EventEmitter = require('events');

var http = require('http');
var elevator = new EventEmitter();

var currentFloor = 1;


elevator.on('floorButton', (floorDest) => {
    console.log('floor', floorDest, 'button pushed');

    setTimeout(() => {
        elevator.emit('closeDoor', floorDest);
    }, 1000);

});

elevator.on('openDoor', (floorDest) => {
    console.log('opening door to floor ->', floorDest);
});

elevator.on('closeDoor', (floorDest) => {
    console.log('door closing');

    setTimeout(() => {
        console.log('door closed w/ destination to floor ->', floorDest);

        if(floorDest != currentFloor) {
            elevator.emit('movingFloors', floorDest);
            console.log('moving to floor ->', floorDest);
            setTimeout(() => {
                elevator.emit('openDoor', floorDest);
            }, 400);
        }
        else {
            console.log('Already on chosen floor');
        }

    }, 1000);

});

elevator.on('emergencyStop', () => {
    console.log('Emergency stop button pushed!');

    setTimeout(() => {
        console.log('Emergency services notified!');
        setTimeout(() => {
            console.log('Rescued!');
        }, 1000);
    }, 1200);
});





elevator.emit('floorButton', 3);
//setTimeout(()=>{
//    elevator.emit('emergencyStop');
//}, 1000);
