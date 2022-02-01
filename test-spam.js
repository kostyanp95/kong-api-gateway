const http = require('http');

(() => {
  setInterval(() => http.get(`http://localhost:8000/hello`,
    res => {
      console.log(`${res.statusMessage}, ${res.statusCode}`)
    }), 100
  )
})()
