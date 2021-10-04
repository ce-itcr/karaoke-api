pipeline {
    agent any
    stages {

        stage ('Build') {
            steps{
                sh 'git checkout testing'
                sh 'git pull'
                sh 'npm start'
            }
        }

    }
}