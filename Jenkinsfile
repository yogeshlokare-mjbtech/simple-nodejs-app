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
    post {
       always {
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
          echo 'This will run only if successful'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}