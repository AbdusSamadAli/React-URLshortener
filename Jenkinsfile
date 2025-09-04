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
                git 'https://github.com/your-username/your-react-repo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Stop Existing Container') {
            steps {
                script {
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
                    sh "docker run -d -p ${DOCKER_PORT}:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}:latest"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
