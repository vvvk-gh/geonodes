const es = require('elasticsearch')
const esConfig = require('../config/elasticsearch.json')


const es_Client = new es.Client({

    host: esConfig.host_url,
    log : esConfig.logLevel,
});

module.exports = es_Client;