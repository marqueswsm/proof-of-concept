const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error0, connection) {
  if (error0) {
    throw error0;
  }

  connection.createChannel((error1, channel1) => {
    if (error1) {
      throw error1;
    }

    channel1.assertQueue('hello', { durable: false });
    channel1.sendToQueue('hello', Buffer.from('https://www.linkedin.com/in/marqueswsm/'));
  });

  setTimeout(function() { 
    connection.close(); 
    process.exit(0) 
  }, 500);
});

