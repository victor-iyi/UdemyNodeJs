// function statement
function greet() {
	console.log('hi')
}
greet()

// functions are first-class
function logGreeting(fn) {
	fn()
}
logGreeting(greet)

// function expression
const greetMe = function() {
	console.log('Hello')
}

logGreeting(greetMe)

// use function expression on the fly
logGreeting(function() {
	console.log('Hello on the fly...')
})