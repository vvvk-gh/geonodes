const esConfig = require('../config/elasticsearch.json')

let bulk = [];

//Creating bulk data to insert into Es
const makeBulk = (file , indexName) => {
    for(var current in file){
        bulk.push(
            { index: {_index : indexName , _type: esConfig.type , _id : current } },
                {
                    'version': file[current].version,
                    'date': file[current].date,
                    'npm': file[current].npm,
                    'v8': file[current].v8,
                    'uv': file[current].uv,
                    'secure': file[current].security,         
                }      
            
            );
    }
    return bulk;
} 

module.exports = makeBulk;