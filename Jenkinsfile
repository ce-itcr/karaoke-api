pipeline {
    agent any
    stages {

        stage ('Build') {
            steps{
                ssh karaokeapi.josevenegasv.com -l ubuntu -i VM-KaraokeApp.pem -f 'bash build.sh testing > /dev/null 2>&1'
            }
        }

    }
}