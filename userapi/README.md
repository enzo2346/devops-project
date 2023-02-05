# User API web application

It is a simple NodeJS web application exposing REST API that creates and stores user parameters in [Redis database](https://redis.io/).

## Functionality

1. Start a web server
2. Create a user

## Installation

This application use NodeJS and Redis database, to install it you need to follow the points below.

1. [Install NodeJS](https://nodejs.org/en/download/)

2. [Install Redis](https://redis.io/download)

3. Install application

Go to the root directory of the application (where `package.json` file located) and run:

```
npm install
```

## Usage

1. Start Redis database

In a terminal, run:

```bash
redis-server
```

2. Start a web server

From the root directory of the project run:

```node
npm start
```

or

```node
node run start
```

It will start a web server available in your browser at http://localhost:3000.

3. Create a user

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

4. Stop the web server

From the root directory of the project run:

```node
npm stop
```

or

```node
node run stop
```

## Testing

From the root directory of the project, run:

```
npm test
```

or

```
npm run test
```

## Authors

- GALLOS Enzo
- BRICE Matthieu
