//dependices
const fs = require('fs');
const express = require('express');
const http = require("http");
const schedule = require('node-schedule'); 
const app = express();

//ES API's
const es_cluster_health = require('./api/health')
const create_es_index = require('./api/createIndex')
const write_es_index = require('./api/writeBulk')

const url = require('./config/http.json').url;
const todayDate = require('./utils/date');
const indexName = 'geomesa-'+todayDate;

const geoMesaData = () => {
    let geoMesaJson = fs.createWriteStream(__dirname + "/geomesa.json");

    http.get(url, res => {
    res.pipe(geoMesaJson);
    res.on("end", function() {
        console.log("Copied response into geomesa.json at  "+new Date());
    });

 });
}


async function test(){
    try{
        // const H_res = await es_cluster_health()
        // console.log("Cluster Health" , H_res);
        const CI_res = await create_es_index(indexName);
         console.log("Index Created" , CI_res);
        const WI_res = await write_es_index(indexName)
        console.log("Documents Created" , WI_res.items) 
    }catch(e){
        console.log(e);
    }
}




 const job = schedule.scheduleJob('*/1 * * * *', function(){
    console.log('Scheduled job started at  ' + new Date() ) 
       geoMesaData();
       test();
 });
