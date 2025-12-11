pipeline {
    agent any

    stages {
        stage('Run Sonarqube') {
            environment {
                scannerHome = tool 'DevOps'  // your scanner installation name
            }
            steps {
                withSonarQubeEnv('sonar') {
                    sh """
                        ${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=myproject \
                        -Dsonar.sources=.
                    """
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }
    }
}
