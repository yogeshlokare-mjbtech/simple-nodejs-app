pipeline {
    agent any
    
    tools {nodejs "node"}

	environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Sonar Analysis') {
            steps {
                bat 'npm run sonar'
            }
        }
        stage('Test') {
            steps{
                bat 'npm test' 
            }
        }
         stage('Deliver') {
            steps {
                bat 'npm start' 
            }
        }
	}
}