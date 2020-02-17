const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (error0, connection) => {
  if (error0) {
    throw error0;
  }

  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1;
    }

    channel.assertQueue('hello', {
      durable: false,
    });
  });

  console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
  
  channel.consume('hello', (msg) => {
    console.log(" [x] Received %s", msg.content.toString());
  }, {
    noAck: true
  });
});


