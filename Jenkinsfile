pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 5000:5000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'chmod +rx ./jenkins/scripts/test.sh'
                sh './jenkins/scripts/test.sh'
            }
        }
    }
}