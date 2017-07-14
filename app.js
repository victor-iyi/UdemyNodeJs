const fs = require('fs')
const zlib = require('zlib') // working with .gz (compressed) files

/**
 * Synchronous operation
 */
// const greet = fs.readFileSync(`${ __dirname }/greet.txt`, 'utf8')
// console.log(greet)

/**
 * Asynchronous operation
 */
// const greet = fs.readFile(`${__dirname}/greet.txt`, 'utf8', function(err, data) {
// 	console.log(data)
// })

/**
 * Readable stream
 */
const readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 128 * 1024 })
/**
 * Writeable stream
 */
const writable = fs.createWriteStream(`${__dirname}/greet-write.txt`, 'utf8')
// listening to the onData event i.e. when a chunk of the data has been read
// readable.on('data', function(chunk) {
// 	console.log(chunk.length)
// 	writable.write(chunk)
// })

/**
 * Pipe (writes to a writable stream the content of what is being read from a readable stream)
 */
readable.pipe(writable)

/**
 * Final compressed writable stream
 */
const compressed = fs.createWriteStream(`${ __dirname }/greet-compressed.txt.gz`)
/**
 * Creating a compressed file
 * this is a readable and a writable stream
 */
const gzip = zlib.createGzip()

/**
 * Takes the read file from the readable stream & sends it to the gzip which compresses the file and then the compressed file is then read from the gzip(which is a duplex stream [readable & writable]) and sent to the compressed writable stream as the final output
 */
readable.pipe(gzip).pipe(compressed)