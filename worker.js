const e = require('express');
const { parentPort } = require('worker_threads');

parentPort.on('message', (task) => {
  // TODO: play with the task
  if (task === 'start!') {
    let result = 0;
    // Simulate CPU-intensive task
    for (let i = 0; i < 1e9; i++) {
      result += i;
    }
    parentPort.postMessage(result);
  } else {
    parentPort.postMessage('Unknown task');
  }
});
