# Container orchestration using Kubernetes

It is our [userapi](https://github.com/enzo2346/devops-project/tree/main/userapi) app running in a container inside a kubernetes cluster with a [Redis](https://redis.io/) container.

## Functionality

1. Start a web server
2. Create a user

## Prerequisites

1. Install [kubectl](https://kubernetes.io/docs/tasks/tools/)

2. Install a hypervisor or Docker: [KVM](https://minikube.sigs.k8s.io/docs/drivers/kvm2/) or [VirtualBox](https://www.virtualbox.org/wiki/Downloads) or [Docker Desktop](https://www.docker.com/products/docker-desktop/)

3. Install BETA version of [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) by following the instructions depending on your OS.

4. Start Minikube with it driver by replacing <> by the name of your driver ([kvm2 driver](https://minikube.sigs.k8s.io/docs/drivers/kvm2/) or [virtualbox driver](https://minikube.sigs.k8s.io/docs/drivers/virtualbox/) or [docker driver](https://minikube.sigs.k8s.io/docs/drivers/docker/)):

```
minikube start --driver=<>
```

3. Verify that everything is OK with:

```
minikube status
```

4. Clone this repository and navigate to the [k8s](https://github.com/enzo2346/devops-project/tree/main/k8s) folder in your terminal.

## Installation and run

### Deployment with local docker image

1. Make docker images available in Minikube:

```bash
eval $(minikube docker-env)
```

2. Build the docker image:

```bash
docker build -t userapi-node .
```

3. Create deployment:

```bash
kubectl create -f deployment-local.yaml
```

### Deployment with docker image from Docker Hub

Create deployment:

```bash
kubectl create -f deployment.yaml
```

### Service setup

Create service:

```bash
kubectl create -f service.yaml
```

Setup persistent volume:

```bash
kubectl create -f persistent-volume.yaml
```

or 

Setup persistent volume claim:

```bash
kubectl create -f persistent-volume-claim.yaml
```

## Usage

### First way

To access to the web server, you need to forward the port of the nodejs container to your local machine:

1. Get the name of the nodejs pod:

```bash
kubectl get pods
```

2. Forward the port of the nodejs pod to your local machine:

```bash
kubectl port-forward <nodejs-pod-name> 3000:3000
```

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

### Second way

To access to the web server with a IP address, you need to get the IP address of the userapi service:

1. Get the name of the userapi service:

```bash
kubectl get services
```

2. Get the IP address and the port of the userapi service:

```bash
minikube service <service-name> --url
```

After doing the step above, you can:

- Access to a web server in your browser at http://"service-ip-address":"service-port".

- Create a user by sending a POST (REST protocol) request using terminal:

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"sergkudinov","firstname":"sergei","lastname":"kudinov"}' \
  http://<service-ip-address>:<service-port>/user
```

## Authors

- GALLOS Enzo
- BRICE Matthieu
