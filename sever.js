const { json } = require('stream/consumers')

http = require('node:http')

server = http.createServer((req,res) => {

    data ={name:"tannu",location:"patna"}
    res.writeHead(200, {"Content-Type":"application/json"})
     res.end(JSON.stringify(data))
})

server.listen(3000, ()=>{console.log('server running')})