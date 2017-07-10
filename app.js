/**
 * Module Patterns
 */

// Pattern 1
const greet1 = require("./greet1")
greet1()

// Pattern 2
// const greet2 = require("./greet2")
// greet2.greet()
const greet2 = require("./greet2").greet
greet2()

// Pattern 3
const greet3 = require("./greet3")
greet3.greet()
greet3.greeting = "Hello from the greet3 inside app.js"

// Pattern 3b
const greet3b = require("./greet3")
greet3b.greet()

// Pattern 4
const Greet4 = require("./greet4")
greet4 = new Greet4()
greet4.greet()

// Patter 5
// const greet5 = require("./greet5")
// greet5.greet()
const greet5 = require("./greet5").greet
greet5()