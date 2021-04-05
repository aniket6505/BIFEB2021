var http = require("http")
function myfunc(request, response){
    console.log("my app got started")
    response.writeHead(200,{"Content-Types": "text/plain"})
    response.write("hello world")
    response.end()
}

http.createServer(myfunc).listen(8080)