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
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            mail bcc: '', 
                body: "<b>Example</b><br>\n\<br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", 
                cc: 'yogeshlokare12@gmail.com', 
                charset: 'UTF-8',
                from: 'yogeshlokare7@gmail.com', 
                mimeType: 'text/html', replyTo: '', 
                subject: "ERROR CI: Project name -> ${env.JOB_NAME}", 
                to: "yogesh.lokare@mjbtech.com";
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