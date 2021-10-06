pipeline {
    agent any
    stages {

        stage ('Build') {
            steps{
                sh "ssh ubuntu@ec2-18-217-235-171.us-east-2.compute.amazonaws.com -i 'VM-KaraokeApp.pem' -f 'bash build.sh testing > /dev/null 2>&1'"
            }
        }

    }
}