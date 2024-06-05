const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
  https
    .request('https://www.google.com', res => {
      console.log('Status Code:', res.statusCode);
      console.log('Headers:', res.headers);

      res.on('data', (data) => {
        // console.log(data.toString());
      });
      res.on('end', (data) => {
        // console.log(data);
        console.log(Date.now() - start);
      });
    })
    .end();
}

doRequest();
