Install RabbitMQ

```bash
brew install rabbitmq
```

Start RabbitMQ

```bash
brew services start rabbitmq
```

Enable the RabbitMQ Managemnt Plugin

```bash
rabbitmq-plugins enable rabbitmq_management
```

Enable MQTT Plugin

```bash
rabbitmq-plugins enable rabbitmq_mqtt
```

SET Remote connection

```bash
vi /opt/homebrew/etc/rabbitmq/rabbitmq-env.conf
```

Change config to

```bash
CONFIG_FILE=/opt/homebrew/etc/rabbitmq/rabbitmq
NODE_IP_ADDRESS=0.0.0.0
NODENAME=rabbit@localhost
RABBITMQ_LOG_BASE=/opt/homebrew/var/log/rabbitmq
PLUGINS_DIR="/opt/homebrew/opt/rabbitmq/plugins:/opt/homebrew/share/rabbitmq/plugins"
```

Restart service

```bash
brew services restart rabbitmq
```

confirm RabbitMQ is listening

```bash
netstat -an | grep 5672
netstat -an | grep 1883
```
