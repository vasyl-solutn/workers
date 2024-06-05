const express = require('express');
const crypto = require('crypto');
const app = express();
const { Worker } = require('worker_threads');

app.get('/', (req, res) => {
  const worker = new Worker(`./worker.js`);

  worker.on('message', (result) => {
    console.log('', result);
    res.send('' + result);
  });

  worker.on('error', (error) => {
    console.error(error);
    res.status(500).send('Internal Server Error');
  });

  worker.on('exit', (code) => {
    if (code !== 0) {
      console.error(new Error(`Worker stopped with exit code ${code}`));
      res.status(500).send('Internal Server Error');
    }
  });

  worker.postMessage('start!');
});

app.listen(3000);
