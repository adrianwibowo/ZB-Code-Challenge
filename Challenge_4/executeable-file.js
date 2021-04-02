const { createEmitter, opened, closed } = require('./EventEmitter')

let emitter = createEmitter(
    () => console.log("Opened!"),
    () => console.log("Closed!")
);

opened(emitter);
closed(emitter);

