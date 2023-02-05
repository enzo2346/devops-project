# User API web application

It is our [userapi](https://github.com/enzo2346/devops-project/tree/main/userapi) app link to a [Redis database](https://redis.io/) and monitored with [prometheus](https://prometheus.io/) and [grafana](https://grafana.com/) containers.

## Functionality

1. Start a web server
2. Create a user

## Prerequisites

1. [Install NodeJS](https://nodejs.org/en/download/)

2. [Install Redis](https://redis.io/download)

3. [Install Docker Destop](https://www.docker.com/products/docker-desktop/)

4. Install application:

Clone this repository, then go to [monitoring](https://github.com/enzo2346/devops-project/tree/main/monitoring) and run:

```
npm install
```

## Installation and configuration

1. Start Redis database

In a terminal, run:

```bash
redis-server
```

2. Start a web server

In another terminal, go to monitoring directory and run:

```node
npm start
```

It will start a web server available in your browser at http://localhost:3000.

3. Start Docker Desktop

4. Start Prometheus container:

- In a third terminal, go to [monitoring/src](https://github.com/enzo2346/devops-project/tree/main/monitoring/src) directory and run:

```bash
docker run --rm -p 9090:9090 \
  -v `pwd`/prometheus.yml:/etc/prometheus/prometheus.yml \
  prom/prometheus:v2.20.1
```

It will start a Prometheus container available in your browser at http://localhost:9090.

5. Start Grafana container:

- In a fourth terminal, go to [monitoring/src](https://github.com/enzo2346/devops-project/tree/main/monitoring/src) directory and run:

```bash
docker run --rm -p 3001:3000 \
  -e GF_AUTH_DISABLE_LOGIN_FORM=true \
  -e GF_AUTH_ANONYMOUS_ENABLED=true \
  -e GF_AUTH_ANONYMOUS_ORG_ROLE=Admin \
  -v `pwd`/datasources.yml:/etc/grafana/provisioning/datasources/datasources.yml \
  grafana/grafana:7.1.5
```

It will start a Grafana container available in your browser at http://localhost:3001.

6. Configure Grafana

- Go to http://localhost:3001

- Click on "+" button on the left panel and select "Import"

- select "Upload .json file" and upload [monitoring/src/grafana-dashboard.json](https://github.com/enzo2346/devops-project/tree/main/monitoring/src/grafana-dashboard.json) file

Then you can see the dashboard.

## Usage

A web server is available at http://localhost:3000.

Prometheus dashboard is available at http://localhost:9090.

Grafana dashboard is available at http://localhost:3001.

- To create a user:

Send a POST (REST protocol) request using terminal:

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"sergkudinov","firstname":"sergei","lastname":"kudinov"}' \
  http://localhost:3000/user
```

It will output:

```
{"status":"success","msg":"OK"}
```

Another way to test your REST API is to use [Postman](https://www.postman.com/).

- To stop the web server

From the root directory of the project run:

```node
npm stop
```

or

```node
node run stop
```

## Authors

- GALLOS Enzo
- BRICE Matthieu
