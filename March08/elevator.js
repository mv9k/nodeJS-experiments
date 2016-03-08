
const EventEmitter = require('events');

var http = require('http');
var elevator = new EventEmitter();

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
        elevator.emit('doorclosed');

        elevator.emit('movingFloors', floorDest);
        console.log('moving to floor ->', floorDest);
        setTimeout(() => {
            elevator.emit('openDoor', floorDest);
        }, 400);


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

elevator.on('floor2Button', (floorDest) => {
    console.log('floor 2 button pushed');

    setTimeout(() => {
        elevator.emit('closeDoor', 2);
    }, 1000)
});





elevator.emit('floorButton', 2);
//elevator.emit('emergencyStop');