# Rhythm Engine

Rhythm Engine is a Node.js application built using the Model-View-Controller (MVC) architecture. It is just a prototype but can be used as a starting point for building scalable and maintanable web applications.

## Key Features

- **Model-View-Controller (MVC) Architecture**: The Rhythm Engine service is built using the MVC architectural pattern, which promotes separation of concerns and modular development. This ensures a clean and maintainable codebase, making it easier for developers to understand and extend the project.

- **Scalable and Maintainable**: The use of the MVC architecture provides a solid foundation for building scalable and maintainable web applications. By separating the application into distinct components, it becomes easier to manage complexity and make changes without affecting other parts of the codebase.

- **Structured Code**: The codebase follows a structured approach, adhering to best practices and industry standards. This makes it easier for new developers to onboard and understand the project, reducing the learning curve and increasing productivity.

- **Customizable and Extensible**: The project structure allows for easy customization and extension. You can add new models, views, and controllers to meet specific application requirements without having to modify the core components. This promotes code reuse and flexibility.

- **Metrics Endpoint**: The service provides a metrics endpoint that exposes relevant application metrics, such as response time, request count and error rates. These metrics can be used to monitor the performance and health of the service. Can be integrated with monitoring tools such as `Prometheus & Grafana` which help ensure the service is running optimally.

- **Logging Capability**: The Rhythm Engine service has capability to capture and log HTTP requests and responses. With this you can easily track and analyze incoming requests, monitor response times, and identify potential issues or bottlenecks in the application.

## Technology Stack

- **Node.js**: The Rhythm Engine service is built on Node.js

- **Express.js**: To handle routing and request handling in the Rhythm Engine service.

- **MongoDB**: Used as the database layer for the application.

## Todo

- Add `DockerFile` for docker image
- Add `Docker Compose` file to include Prometheus & Graphana
- Explore open source log consumer platform/dashboard like Google Cloud Console. 

