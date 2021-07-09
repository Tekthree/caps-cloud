'use strict';

const aws = require('aws-sdk');
aws.config.update({region: 'us-west-2'});
const SNS = new aws.SNS();

// from github @diehlaws 
if ($message['Type'] === 'Notification') {

  SNS.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(console.error);
  
}