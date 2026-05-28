// import the built in module 'http'
import http from 'http';

const server = http.createServer((req, res) => {
    // extract cookies from request headers
    const cookies = req.headers.cookie;

    //set the response header to write plain text
    res.writeHead(200, { 'content-Type': 'text/plain' });

    //send the cookies back to the browser display or a fallback message
    if (cookies) {
        res.end(`success! cookies from request : ${cookies}`);
    } else {
        res.end(`No cookies found in the request header`);
    }
})

//make the server listen on port 3000
server.listen(3000, () => {
    console.log(`server is up and running on http://localhost:3000`);
})
