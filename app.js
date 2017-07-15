const http = require('http')
const fs = require('fs')

const PORT = process.env.PORT || 4000

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' })
	let doc = fs.readFile(`${ __dirname }/index.html`, 'utf8', (err, data) => {
		data = data.replace('{name}', 'Victor I. Afolabi')
		data = data.replace('{age}', 21)
		res.end(data)
	})
})
server.listen(PORT, 'localhost')
console.log(`Server listening @ http://localhost:${ PORT }`)