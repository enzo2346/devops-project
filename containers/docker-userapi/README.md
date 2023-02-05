# Container with Docker

It is our [userapi](https://github.com/enzo2346/devops-project/tree/main/userapi) app running inside a docker container and link to the host [Redis database](https://redis.io/).

## Functionality

1. Start a web server
2. Create a user

## Prerequisites

To be able to launch this container you must have install

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

- [Redis Database](https://redis.io/download)

## Installation and run

First you need to start redis with the command:

```bash
redis-server
```

Then to install the docker image you can follow one of the two way below:

### Using local Docker image

1. Clone this repository and navigate to the [docker-userapi](https://github.com/enzo2346/devops-project/tree/main/containers/docker-userapi) folder in your terminal.

2. Run the command below to create the docker image:

```bash
docker build -t userapi-app .
```

3. Run the command below to start the userapi application:

```bash
docker run -p 3000:3000 userapi-app
```

### Using Docker Hub image

1. Pull the image with this command:

```bash
docker pull enzo2346/userapi
```

2. Start the container with the command:

```bash
docker run -p 3000:3000 -d enzo2346/userapi
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
