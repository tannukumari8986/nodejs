a = require('node:fs')
b = a.readFileSync('./a.txt', 'utf-8')
console.log(b)

a.readFile('./a.txt', 'utf-8', (error, data) =>{
    if(error){console.log(error)}
    else{console.log(data)}
})
console.log('smritiiyaaaaaa')
console.log('yaaaaaa')
console.log('tiiyaaaaaaaaaaaaaa')
console.log('mritiiyaaaaaa')