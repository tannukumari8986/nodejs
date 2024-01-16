http = require('node:http')

server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type":"text/plain"})
     res.end(" Hiee Iam tannu & this is my first node server")
})

server.listen(3000, ()=>{console.log('server running')})