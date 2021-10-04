pipeline {
    agent any
    stages {
        stage('Git repo'){
            steps{
                git branch: 'testing', url: 'https://github.com/OscarAraya18/Karaoke/'
            }
        }
        stage ('Testing Stage') {
            steps{
                withMave(maven : 'maven_3_8_3'){
                    sh 'mvn test'
                }
            }
        }

        stage ('Deployment Stage') {
            steps{
                withMave(maven : 'maven_3_8_3'){
                    sh 'mvn deploy'
                }
            }
        }

    }
}