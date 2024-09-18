# Issue Tracker

This is a simple issue tracker application that consists of a frontend client, a backend server, and a MongoDB database. The application is containerized using Docker and can be easily run using Docker Compose.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

To get started, clone the repository and navigate to the project directory:

```bash
git clone <repository-url>
cd <repository-directory>
```

## Running the Application

To run the application, use the following command:

```bash
docker-compose up
```

This will build and start the frontend, backend, and MongoDB services.

## Services and Ports

- **Frontend (React)**: http://localhost:3000
- **Backend (Node.js/Express)**: http://localhost:5000
- **MongoDB**: mongodb://localhost:27017

## Stopping the Application

To stop the application, use the following command:

```bash
docker-compose down
```

This will stop and remove the containers.

## Volumes

The MongoDB data is stored in a Docker volume named `mongo-data`.

## License

This project is licensed under the MIT License.
