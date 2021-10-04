pipeline {
    agent any
    stages {

        stage ('Build') {
            steps{
                sh 'git pull'
                sh 'npm start'
            }
        }

    }
}