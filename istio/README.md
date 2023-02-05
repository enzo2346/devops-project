# Service mech using istio

It is our [userapi](https://github.com/enzo2346/devops-project/tree/main/userapi) app running in a service mech using [Istio](https://istio.io/latest/) and [Minikube](https://kubernetes.io/fr/docs/setup/learning-environment/minikube/).

## Functionality

1. Start a web server
2. Create a user

## Prerequisites

1. Install [kubectl](https://kubernetes.io/docs/tasks/tools/)

2. Install a hypervisor or Docker: [KVM](https://minikube.sigs.k8s.io/docs/drivers/kvm2/) or [VirtualBox](https://www.virtualbox.org/wiki/Downloads) or [Docker Desktop](https://www.docker.com/products/docker-desktop/)

3. Install BETA version of [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) by following the instructions depending on your OS.

4. Start Minikube with it driver by replacing <> by the name of your driver ([kvm2 driver](https://minikube.sigs.k8s.io/docs/drivers/kvm2/) or [virtualbox driver](https://minikube.sigs.k8s.io/docs/drivers/virtualbox/) or [docker driver](https://minikube.sigs.k8s.io/docs/drivers/docker/)):

```
minikube start --driver=<> --memory=14384 --cpu=4
```

3. Verify that everything is OK with:

```
minikube status
```

4. Run the command in backgroup (with &) or in another shell:

```bash
minikube tunnel
```

5. To download and install Istio follow the instructions in the link bellow until "Deploy the sample application"

https://istio.io/docs/setup/getting-started/

6. Clone this repository and navigate to the [Istio](https://github.com/enzo2346/devops-project/tree/main/istio) folder in your terminal.

## Installation and run

Deploy userapi app:

```bash
kubectl apply -f deployment.yaml
```

To check if the application is running run the following command:

```bash
kubectl get services
```

and

```bash
kubectl get pods
```

Re-run the previous command and wait until all pods report **READY 2/2** and STATUS **Running** before you go to the next step. This might take a few minutes depending on your platform.

### Open the application to outside traffic

To open the application to outside traffic we need to execute the following command:

1. To add the port 3000 in the ingress gateway:

```bash
istioctl install -f allow-port-3000.yaml
```

2. To add all the destinations rules:

```bash
kubectl apply -f destination-rule-all.yaml
```

3. To create the gateway to allow to access to our app from outside traffic:

```bash
kubectl apply -f gateway.yaml
```

4. Check if everything is ok with the command:

```bash
istioctl analyze
```

5. Then to get a variable which print the url to access to the app:

```bash
export INGRESS_HOST=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http-custom-1")].port}')
export GATEWAY_URL=$INGRESS_HOST:$INGRESS_PORT
echo "http://$GATEWAY_URL/"
```
Then you can access to a web server in your browser with the url print which is by default the version 1.0 of it.

### Request Routing

To route to the version 2 of the app (Hello world! in red) run the command:

```bash
kubectl apply -f virtual-service-v2.yaml
```

To route to the v1 which is the default route:

```bash
kubectl apply -f virtual-service-v1.yaml
```
### Traffic Shifting

Run this command to route all traffic to the v1 version:

```bash
kubectl apply -f virtual-service-v1.yaml
```

Transfer 50% of the traffic from v1 to v2 with the following command:

```bash
kubectl apply -f virtual-service-userapi-50.yaml
```

Route 100% of the traffic to v2:

```bash
kubectl apply -f virtual-service-v2.yaml
```

## Authors

- GALLOS Enzo
- BRICE Matthieu
