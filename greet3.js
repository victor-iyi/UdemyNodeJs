function Greeter() {
	this.greeting = "Hello from greet3"
	this.greet = () => {
		console.log(this.greeting)
	}
}

module.exports = new Greeter()