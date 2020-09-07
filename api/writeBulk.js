const esClient = require('../lib/connection');
const esConfig = require('../config/elasticsearch.json')
const makeBulk = require('../utils/makeBulk')
const file = require('../geomesa.json')


const writeBulkIndex = async (indexName) => {
    return await esClient.bulk({
        maxRetries: esConfig.maxRetries,
        index : indexName,
        type : esConfig.type,
        body : await makeBulk(file , indexName)
    })
}

module.exports = writeBulkIndex;