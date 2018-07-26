const express = require('express')
const next = require('next')
const http = require('http')
const config = require('./config')
const boot = require('./boot.js')
const dev = process.env.NODE_ENV !== 'production'
const ini = next({ dev })
const handle = ini.getRequestHandler()

ini.prepare()
.then(() => {
  const app = express()
  const server = http.createServer(app);

    boot.init(config,app,server,ini); // model

    app.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(C.port, (err) => {
      if (err) throw err
      console.log(`> Ready on ${C.domain.www}`)
    })

})
