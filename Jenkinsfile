pipeline {
    agent any

    environment {
        IMAGE_NAME = 'devops-app'
        CONTAINER_NAME = 'devops-container'
        PORT = '3000'
    }

    stages {

        stage('Clone Repo') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: 'https://github.com/Wakas1234/devops-docker-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image: ${IMAGE_NAME}"
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Stop Old Container') {
            steps {
                echo "Stopping old container if exists: ${CONTAINER_NAME}"
                sh "docker rm -f ${CONTAINER_NAME} || true"
            }
        }

        stage('Run Container') {
            steps {
                echo "Running container: ${CONTAINER_NAME} on port ${PORT}"
                sh "docker run -d -p ${PORT}:${PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }

    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs.'
        }
    }
}
