const EventEmitter = require('events')
const util = require('util')

function Greetr() {
	EventEmitter.call(this) // equivalent to super()
	this.greeting = 'Hello, World!'
}

util.inherits(Greetr, EventEmitter)

Greetr.prototype.greet = function () {
	console.log(this.greeting)
	this.emit('greet')
}

const grtr = new Greetr()
grtr.on('greet', function() {
	console.log('Greetings to you too')
})
grtr.greet()
