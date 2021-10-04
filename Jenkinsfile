pipeline {
    agent any
    stages {
        stage ('Compile Stage') {
            steps{
                withMave(maven : 'maven_3_8_3'){
                    sh 'mvn clean compile'
                }
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