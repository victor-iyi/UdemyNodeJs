function Greeter() {
	this.greeting = "Hello from greet4"
	this.greet = () => {
		console.log(this.greeting)
	}
}

module.exports = Greeter