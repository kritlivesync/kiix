exports.boot = function(config) {
    const express = require('express')
    const app = express()
    global.DOCS = {
        api:{},
        socket:{},
    };
    global.C = config; //config
    global.L = {}; //local session
    global.D = {}; //data base
    global.M = {}; //middle where
    global.S = {}; //service
    global.R = require('./init/cache.js'); //redis
    global.F = require('./init/funcs.js'); //function

    require('./init/models.js'); // model
    require('./init/middles.js'); // middle
    require('./init/boot.js')(app); // model
    require('./init/services.js'); // service
    return app
}

exports.server = function(config) {
    const next = require('next')
    const http = require('http')
    const dev = process.env.NODE_ENV !== 'production'
    const ini = next({ dev })
    const handle = ini.getRequestHandler()
    const app =exports.boot(config)
    ini.prepare()
        .then(() => {
            
            const server = http.createServer(app);

            require('./init/routes.js')(app, ini); // router
            require('./init/socket.js')(server);

            app.get('*', (req, res) => {
                return handle(req, res)
            })

            server.listen(C.port, (err) => {
                if (err) throw err
                console.log(`> Ready on ${C.domain.www}`)
            })

        })
}
