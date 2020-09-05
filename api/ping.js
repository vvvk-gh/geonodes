const esClient = require('./connection');

esClient.ping({
    requestTimeout: 1000
},(err) => {
    if (err) console.trace('elasticsearch cluster is offline :(');
    else  console.log('All looks good');
});