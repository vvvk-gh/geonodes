const esClient = require('../lib/connection');


const clusterHealth = async () => {
    return await esClient.cluster.health({

    })
    
}

module.exports = clusterHealth;