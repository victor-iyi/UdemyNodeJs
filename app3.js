/**
 * Using ES6 classes
 */
const Greetr = require('./greetr')
const grtr = new Greetr()
grtr.on('greet', function(data) {
	console.log(`Hello, ${ data }!`)
})
grtr.greet('Victor')