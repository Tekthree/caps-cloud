
'use strict';
const consumer = require('sqs-consumer');
const producer = require('sqs-producer');

await producer.send({
  topic: 'topic-name',
  messages: [{
      key: 'key1',
      value: 'hello world',
      headers: {
          'correlation-id': '2bfb68bb-893a-423b-a7fa-7b568cad5b67',
          'system-id': 'my-system'
      }
  }]
})