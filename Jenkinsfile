pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-react-app"
        CONTAINER_NAME = "react-app-container"
        DOCKER_PORT = "3000"
    }

    stages {

        stage('Checkout') {
            steps {
                // Checkout code from GitHub using HTTPS credential
                git branch: 'main',
                    url: 'https://github.com/username/your-react-repo.git',
                    credentialsId: 'github-credential'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image..."
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Stop Existing Container') {
            steps {
                script {
                    echo "Stopping existing container if it exists..."
                    sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    """
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    echo "Running Docker container..."
                    sh "docker run -d -p ${DOCKER_PORT}:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}:latest"
                }
            }
        }

    }

    post {
        success {
            echo "Pipeline completed successfully! React app should be running on port ${DOCKER_PORT}."
        }
        failure {
            echo "Pipeline failed. Check logs for errors."
        }
    }
}
