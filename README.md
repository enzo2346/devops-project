# devops-project

This is our repository for both the labs and project

## Important information before started

We have done the labs and the project together at school even though there isn't a good repartion of git commits.
We did that after lab3 because we understood that we will lose a lot of time by just trying to merge branch and work generally on two different computers.

## Work performed

1. Web Application

- CRUD app in JS
- Storage in Redis Database
- Health check using Mocha and Chai

2. Countinuous Integration and Continuous Delivery

- CI using Github Actions
- CD using Heroku (account with no credit card) and with Microsoft Azure (student account)

3. Infrastructure as Code

- Vagrant VM using Ubuntu 22.04
- Provision of the VM with Ansible (installing and running inside it) :
  - Web application with sync folders
  - Redis Database
  - Health check using ansible playbook and the health check already done inside the web application

4. Docker

- Docker image available in the repository and in Docker Hub
- Run the web application inside a docker container with port 3000 expose

5. Docker Compose

- Run the web application inside a container link to another container with Redis db
- Web application accessible at port 3000 on host

6. Docker orchestration using Kubernetes

- K8s cluster using Minikube
- Kubernetes YAML files :
  - deployments
  - services
  - persistent volume 
  - persistent volume claim

7. Service mech using Istio

- Deploy our app
- Open app to outside traffic
- Configurations:
  - traffic routing between 2 different versions of our app
  - traffic shifting between 2 different versions of our app
  
8. Implement Monitoring

- Install Prometheus and Grafana in containers allongside userapi app
- Set up prometheus to pull userapi status
- Set up grafana to display the status and memory usage of userapi app
- trigger alerts if app is down or if memory usage is too high

## Screenshots

Screenshots of all the different way of running the web application are provided in the [screenshots](https://github.com/enzo2346/devops-project/tree/main/screenshots) folder

## Instructions

Instructions to install, use and test the web application are available in the README.md of the following folder :
  - [userapi](https://github.com/enzo2346/devops-project/tree/main/userapi) for just the web application
  - [.github/workflows](https://github.com/enzo2346/devops-project/tree/main/.github/workflows) for CI-CD integration
  - [iac](https://github.com/enzo2346/devops-project/tree/main/iac) for Infrastructure as Code with Vagrant and Ansible
  - [containers/docker-userapi](https://github.com/enzo2346/devops-project/tree/main/containers/docker-userapi) for Docker
  - [containers/docker-compose-userapi](https://github.com/enzo2346/devops-project/tree/main/containers/docker-compose-userapi) for Docker-compose
  - [k8s](https://github.com/enzo2346/devops-project/tree/main/k8s) for Kubernetes with Minikube
  - [istio](https://github.com/enzo2346/devops-project/tree/main/istio) for Istio with Minikube
  - [monitoring](https://github.com/enzo2346/devops-project/tree/main/monitoring) for monitoring with prometheus and grafana
  - [labs](https://github.com/enzo2346/devops-project/tree/main/labs) for the labs done before the project

## Platforms and tools used

- [git](https://git-scm.com/)
- [curl](https://curl.se/)
- [github](https://github.com/)
- [nodejs](https://nodejs.org/en/)
- [redis](https://redis.io/)
- [heroku](https://www.heroku.com/)
- [azure](https://azure.microsoft.com/fr-fr/)
- [virtualbox](https://www.virtualbox.org/)
- [vagrant](https://www.vagrantup.com/)
- [ansible](https://www.ansible.com/)
- [docker desktop](https://www.docker.com/products/docker-desktop/)
- [minikube](https://minikube.sigs.k8s.io/docs/start/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [istio](https://istio.io/)
- [prometheus](https://prometheus.io/)
- [grafana](https://grafana.com/)

## Authors

- GALLOS Enzo
- BRICE Matthieu
