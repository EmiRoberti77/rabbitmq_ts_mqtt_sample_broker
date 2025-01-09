import amqp from "amqplib/callback_api";
amqp.connect("amqp://localhost", (error0, connection) => {
  if (error0) {
    throw error0;
  }
  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1;
    }
    var queue = "hello";
    var msg = "Ciao Mondo";

    channel.assertQueue(queue, {
      durable: true,
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log("[x] Sent %s", msg);
  });
});
