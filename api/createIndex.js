const esClient = require('../lib/connection');

const createEsIndex = async (indexName) => {
    return await esClient.indices.create({
            index : indexName
    });
}

module.exports = createEsIndex

