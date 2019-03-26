const chai = require('chai');
const log4js = require('log4js');
const kii = require('kiix');
const env = require('../config');

kii.boot(env);
log4js.configure({
    appenders: {
        console: { type: 'console' }
    },
    categories: { default: { appenders: ['console'], level: 'all' } }
})

let loggger = log4js.getLogger()
let expect = chai.expect

describe('## Test section', function() {
    it("=>test function", async function () {
        var result = await S._server.getConfig()
        //loggger.debug(result.port)
        expect(result).to.have.property('port').equal(36996)
    })
})
