import amqplib from "amqplib";

const EXCHANGE = "amq.topic"; // Default MQTT exchange in RabbitMQ
const QUEUE = ""; // Let RabbitMQ assign a random queue name
const TOPIC = "test-topic";

async function startConsumer() {
  try {
    // Connect to RabbitMQ server
    const connection = await amqplib.connect("amqp://localhost");
    const channel = await connection.createChannel();

    // Assert a queue and bind it to the exchange with the topic
    const q = await channel.assertQueue(QUEUE, { exclusive: true });
    console.log(`Waiting for messages in queue: ${q.queue}`);
    channel.bindQueue(q.queue, EXCHANGE, TOPIC);

    // Consume messages
    channel.consume(
      q.queue,
      (msg) => {
        if (msg) {
          console.log(`Received message: ${msg.content.toString()}`);
        }
      },
      { noAck: true }
    );
  } catch (error) {
    console.error("Error starting RabbitMQ Consumer:", error);
  }
}

startConsumer();
