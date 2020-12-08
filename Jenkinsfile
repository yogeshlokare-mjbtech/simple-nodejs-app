pipeline {
    agent any
    
    tools {nodejs "node"}

	environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
				git branch: 'main', url: 'https://github.com/yogeshlokare-mjbtech/simple-nodejs-app.git'
                bat 'npm install'
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