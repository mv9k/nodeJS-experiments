// const keeps it from being reassigned.
const EventEmitter = require('events');

const emitter = new EventEmitter();

// (params) =>    'fat arrow' is another way to say 'function(params)'

emitter.on('event', (data) => {
    console.log('an event occurred!', data.number, data['name'], data.property);
});





emitter.emit('event', {
    number: 123,
    name: 'name',
    property: 'prop1'
});


emitter.emit('event', '4321');