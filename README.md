# React Vite URL Shortener - Dockerized with Jenkins CI/CD

## Project Overview
This project is a **React Vite-based URL Shortener**.  
It has been **containerized with Docker** and deployed via **Jenkins CI/CD**.

- React frontend built using **Vite**.
- Docker used to create an **nginx-based container** serving the app.
- Jenkins automates **CI/CD pipeline**:
  1. Checkout code from GitHub
  2. Build Docker image
  3. Stop old container
  4. Run new container

---

## Features
- URL shortening functionality
- Dockerized React app
- Automated CI/CD with Jenkins
- Auto-build and deploy on code push

---

Docker: Packages the React Vite app along with Nginx into a lightweight container, ensuring it runs the same way on any machine without local setup issues.

Jenkins: Automates the CI/CD pipeline by pulling the latest code from GitHub, building the Docker image, stopping any old container, and running the new container, so deployment happens automatically on each code change.

---


