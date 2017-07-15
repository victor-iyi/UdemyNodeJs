const http = require('http')
const fs = require('fs')

const PORT = process.env.PORT || 4000

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' })
	// const doc = fs.createReadStream(`${ __dirname }/index.html`).pipe(res)
	const readable = fs.createReadStream(`${ __dirname }/index.html`, { encoding: 'utf8' })
	readable.on('data', (doc) => {
		doc = doc.replace('{name}', 'Victor I. Afolabi')
		doc = doc.replace('{age}', 21)
		res.end(doc)
	})
})
server.listen(PORT, 'localhost')
console.log(`Server listening @ http://localhost:${ PORT }`)