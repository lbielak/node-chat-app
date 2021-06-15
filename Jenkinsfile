pipeline {
    agent any 
    stages {
        stage('Test') { 
            steps {
                echo 'Testowanie'
                sh 'npm run test'
            }
        }
    }
post {
        failure {
            emailext attachLog: true,
                body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}",
                recipientProviders: [developers(), requestor()],
                to: 'karolc3dro@gmail.com',
                subject: "Test failed : Job ${env.JOB_NAME}"
        }
        success {
            emailext attachLog: true,
                body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}",
                recipientProviders: [developers(), requestor()],
                to: 'karolc3dro@gmail.com',
                subject: "Test successful : Job ${env.JOB_NAME}"
        }
        }
        }
