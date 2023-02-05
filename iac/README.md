# Infrastructure as Code with Vagrant

It is our [userapi](https://github.com/enzo2346/devops-project/tree/main/userapi) app running inside a [Ubuntu 22.04.1 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/22.04/) virtual machine with it [Redis database](https://redis.io/).

## Functionality

1. Start a web server
2. Create a user

## Prerequisites

To be able to launch this VM you must have done the following steps

1. [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads)

2. [Install Vagrant](https://developer.hashicorp.com/vagrant/downloads)

3. (Optional) **On Windows**, ensure that Hyper-V is disabled:
   
   - Open a new PowerShell.
   
   - Run the following command:
     
     ```bash
     Disable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All
     ```

## Intallation

To create, configure and then start the VM follow the instructions below

1. Clone this repository and navigate to the [iac](https://github.com/enzo2346/devops-project/tree/main/iac) folder in your terminal.

2. Run the command:
   
   ```bash
   vagrant up --provision
   ```

It will take 5-10 min to install all the necessary software including required packages, nodejs and redis.

The previous command have also done the following steps to allow us to access to the userapi application from our host:

- start redis server in the VM

- share the userapi folder to the VM (accesible at /home/vagrant/userapi in it)

- forward the port 3000 to the VM

- start userapi application on the VM (at port 3000 to be able to reach it from the host)

## Usage

After doing the installation step, you can:

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

## Health check

To run a health check of your application inside a vm, do the following steps:

1. navigate to the [iac](https://github.com/enzo2346/devops-project/tree/main/iac) folder in your terminal.

2. Run the command:

```bash
vagrant ssh
```

3. Then run the command:

```
ansible-playbook /vagrant/playbooks/run.yml --tags check -i /tmp/vagrant-ansible/inventory/vagrant_ansible_local_inventory
```

Look at the play recap printing at the end of the test to see if the health check is successfull.

## Authors

- GALLOS Enzo
- BRICE Matthieu
