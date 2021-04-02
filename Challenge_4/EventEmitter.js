/**
 * The createEmitter function should create a new EventEmitter and register "open" and "close" event listeners. 
 * The callbacks for those events should be onOpen and onCLose arguments, respectively. The opened and closed methods should raise the "open" and "close" events on the EventEmitter they will receive as emitter arguments. 
 * The callbacks should be invoked only once per emitter 
 * For example, after executing the following code , it should print "Opened!" and then "Closed!"
 */

const events = require("events"),
eventEmitter = new events();

function createEmitter(onOpen, onClose) {
eventEmitter.on("open", onOpen);
eventEmitter.on("close", onClose);
}

function opened(emitter) {
    eventEmitter.emit("open", emitter);
}

function closed(emitter) {
    eventEmitter.emit("close", emitter);
}

module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;
