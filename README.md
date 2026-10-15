# FitTrack – Dockerized Diet Tracker

FitTrack is a simple web application with a registration and login page. I built this project to learn how a frontend, backend and database work together, and then deployed the application on an AWS EC2 instance using Docker Compose.

This was my first end-to-end deployment on AWS. I worked on the application, created Docker images, pushed them to Docker Hub and ran the containers on an EC2 server.

## Application Preview

![FitTrack Registration Page](screenshot/Screenshot%202026-10-15%20at%2007.42.07.png)

The application has a registration form where a user can enter their name, email address and password. The backend processes the registration request and stores the user information in PostgreSQL. Passwords are hashed before being stored.

## Tech Stack

- **Frontend:** React.js, Vite
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Containerization:** Docker
- **Container Management:** Docker Compose
- **Cloud Platform:** AWS EC2
- **Container Registry:** Docker Hub
- **Server OS:** Ubuntu

## How It Works

The application runs using three Docker containers:

1. **Frontend:** Serves the React application to the browser.
2. **Backend:** Handles registration requests and communicates with the database.
3. **PostgreSQL:** Stores registered user information.

The frontend sends requests to the backend, and the backend interacts with PostgreSQL. Docker Compose manages the services together.

## Project Structure

```text
diet-tracker/
├── frontend/
│   └── Dockerfile
├── backend/
│   └── Dockerfile
├── docker-compose.yml
├── .gitignore
├── README.md
└── screenshots/
```

The frontend and backend folders contain their respective application code. Docker Compose defines the services and their configuration.

## Dockerization

I created separate Docker images for the frontend and backend and used the official PostgreSQL image for the database.

The images are available on Docker Hub:

- [Frontend Image – Docker Hub](https://hub.docker.com/r/shaniroy7323/diet-tracker-frontend)
- [Backend Image – Docker Hub](https://hub.docker.com/r/shaniroy7323/diet-tracker-backend)

Docker Compose brings the frontend, backend and database together. It also makes it easier to start and manage the application without running each service manually.

![Docker Hub Repositories](screenshot/Screenshot%202026-10-15%20at%2007.43.36.png)

## AWS EC2 Deployment

I deployed the application on an Ubuntu EC2 instance in AWS.

The deployment process involved:

1. Launching an EC2 instance.
2. Connecting to the instance through SSH.
3. Installing and configuring Docker and Docker Compose.
4. Getting the project files onto the EC2 instance.
5. Configuring the application and database environment variables.
6. Pulling or building the required Docker images.
7. Starting the services using Docker Compose.
8. Checking the container status and testing the application in a browser.

The frontend is exposed on port **8080** on the EC2 instance. The backend and database communicate through the Docker network.

![AWS EC2 Instance](screenshot/Screenshot%202026-10-15%20at%2007.44.07.png)

## Verification and Testing

After deployment, I checked that the containers were running and tested the registration flow through the browser.

I also queried PostgreSQL from inside the database container to verify that registered user records were being saved.

![Running Docker Containers](screenshot/Screenshot%202026-10-15%20at%2007.42.36.png)

![PostgreSQL Database Verification](screenshot/Screenshot%202026-10-15%20at%2007.43.14.png)

These checks helped me confirm that the frontend, backend and database were working together on the deployed instance.

## Run the Project Locally

Make sure Docker and the Docker Compose plugin are installed.

1. Clone the repository:

   ```bash
   git clone <YOUR_GITHUB_REPOSITORY_URL>
   ```

2. Open the project directory:

   ```bash
   cd diet-tracker
   ```

3. Configure the required environment variables for the backend and database. Use the variable names expected by the existing application and `docker-compose.yml`.

4. Start the services:

   ```bash
   docker compose up -d --build
   ```

5. Check the containers:

   ```bash
   docker compose ps
   ```

6. Open the frontend in your browser:

   ```text
   http://localhost:8080
   ```

The application will run locally if the required configuration is correct and the relevant ports are available.

## What I Learned

This project helped me understand a lot of things beyond just writing application code.

- How a React frontend communicates with a Node.js backend.
- How the backend connects to PostgreSQL.
- How to write Dockerfiles for application services.
- How to use Docker Compose to manage multiple containers.
- How Docker images are pushed to and pulled from Docker Hub.
- How to deploy a containerized application on AWS EC2.
- How to configure ports and security group rules.
- How to check container logs and troubleshoot deployment issues.
- How to verify database records directly from PostgreSQL.

I also learned that deployment involves more than getting the application to open in a browser. Configuration, networking, database connectivity and troubleshooting are all important parts of the process.

## Future Improvements

- Configure HTTPS with a domain name.
- Set up a CI/CD pipeline for automated deployments.
- Improve authentication and session management.
- Add automated tests and application monitoring.
- Move sensitive configuration into a secure secrets-management solution.

## Demo

**Live Demo:** Coming soon...

**Deployment Walkthrough:** Add your full demo video link here.

## Author

**Shani Roy**

B.Tech CSE Student | Learning Cloud Computing, Docker and DevOps

- GitHub: https://github.com/Shaniroy-7323/Diet-tracker
- Docker Hub: [shaniroy7323](https://hub.docker.com/u/shaniroy7323)

