import mqtt from "mqtt";

const MQTT_URL = "mqtt://localhost:1883";
const topic = "test-topic";

const client = mqtt.connect(MQTT_URL);

client.on("connect", () => {
  console.log("MQTT_client_connected");
  const message = { message: "hello from emi" };
  client.publish(topic, JSON.stringify(message), () => {
    console.log("Message published to topic", topic);
    client.end();
  });
});

client.on("error", (err) => {
  console.error(err);
});
