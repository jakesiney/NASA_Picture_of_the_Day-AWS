# NASA Picture of the Day Project - AWS

[![Build and Push to Docker Hub](https://github.com/jakesiney/NASA_Picture_of_the_Day/actions/workflows/CI.yml/badge.svg)](https://github.com/jakesiney/NASA_Picture_of_the_Day/actions/workflows/CI.yml)

This a straightforward web application using JavaScript and Express. Its purpose is simple: displaying the captivating NASA Astronomy Picture of the Day using the NASA APOD API. This project serves as a hands-on playground for honing DevOps skills.

[Visit NASA Apod here 🚀🌌](https://apod.jakesiney.com)

[Terraform files](https://github.com/jakesiney/Terraform-Projects-Server-AWS)

## Project Features

- **Terraform Configuration:** The project's infrastructure, including EC2, CloudFront CDN, and security settings, is defined and provisioned using Terraform. This enables consistent, version-controlled deployments.

- **Cloudfront:** Amazon CloudFront accelerates content delivery globally and ensures HTTPS encryption for secure data transmission, enhancing both performance and security.

- **Dockerized Deployment:** The project runs in a Docker container on an EC2 instance, ensuring seamless accessibility and scalability while simplifying management and dependency handling.

- **NGINX Reverse Proxy:** Served through an NGINX reverse proxy, the project optimises performance and security, efficiently handling traffic and securely routing requests to resources.

- **Continuous Integration Pipeline:** Implemented via a CI pipeline, code changes trigger automatic build and deployment processes, ensuring rapid development iterations and keeping the project current.



![Alt text](pots_screenshot.jpg)
