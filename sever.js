http = require('node:http')

server = http.createServer((req,res) => {
     res.end("<h1 style='color:blue; text-align:center' > Hiee Iam tannu & this is my first node server</h1>")
})

server.listen(3000, ()=>{console.log('server running')})