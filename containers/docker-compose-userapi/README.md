# Container orchestration using Docker Compose

It is our [userapi](https://github.com/enzo2346/ece-devops-BRICE-GALLOS/tree/main/userapi) app running inside a docker container and link a [Redis](https://redis.io/) container.

## Functionality

1. Start a web server
2. Create a user

## Prerequisites

To be able to launch this container you must have install

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Installation and run

To install and run the containers do the following steps:

1. Clone this repository and navigate to the [docker-compose-userapi](https://github.com/enzo2346/ece-devops-BRICE-GALLOS/tree/main/containers/docker-compose-userapi) folder in your terminal.

2. Run the command!

```bash
docker-compose up
```

## Usage

After doing the step above, you can:

- Access to a web server in your browser at http://localhost:3000.

- Create a user by sending a POST (REST protocol) request using terminal:

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

## Authors

- GALLOS Enzo
- BRICE Matthieu
