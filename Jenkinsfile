pipeline {
    agent any
    stages {

        stage ('Build') {
            steps{
                sh 'cd karaoke-api'
                sh 'git checkout testing'
                sh 'git pull https://github.com/ce-itcr/karaoke-api.git'
                sh 'npm start'
            }
        }

    }
}