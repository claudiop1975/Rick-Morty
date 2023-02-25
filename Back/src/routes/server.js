
const http = require('http')
const getCharById = require('../controllers/getCharById.js')
const getCharDetail = require('../controllers/getCharDetail.js')
const PORT = 3001

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    if (req.url.includes('onsearch')) {
        let id = req.url.split("/").at(-1)
        getCharById(res, id)
        return
    }
    if (req.url.includes('detail')) {
        let id = req.url.split("/").at(-1)
        getCharDetail(res, id)
        return
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end("Route not found")

}).listen(PORT, 'localhost');
console.log(`Server running at http://localhost:${PORT}`);

