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
                body: "test1",
                recipientProviders: [developers(), requestor()],
                to: 'ukaszbielak@gmail.com',
                subject: "build failed"
        }
        success {
            emailext attachLog: true,
                body: "test",
                recipientProviders: [developers(), requestor()],
                to: 'ukaszbielak@gmail.com',
                subject: "build successful"
        }
    }
}
