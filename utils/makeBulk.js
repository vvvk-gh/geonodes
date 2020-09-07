const esConfig = require('../config/elasticsearch.json')
let bulk = [];

//Creating bulk data to insert into Es
const makeBulk = (file , indexName) => {

    for(var current in file.features){
        bulk.push(
            { index: {_index : indexName , _type: esConfig.type , _id : current } },
                {
                    
                    'account_no': file.features[current].properties.account_no,
                    'ac_failure' : file.features[current].properties.ac_failure,
                    'date': file.features[current].properties.dtg,
                    'dealer_id': file.features[current].properties.dealer_id,
                    'device_id': file.features[current].properties.device_id,                    
                    'id': file.features[current].id,
                    'imei': file.features[current].properties.imei,
                    'low_battery': file.features[current].properties.low_battery,
                    'location':file.features[current].geometry,
                    'supervisory_loss' : file.features[current].properties.supervisory_loss,
                    'tamper': file.features[current].properties.tamper,
                }      

            );
    }
    return bulk;
} 



module.exports = makeBulk;