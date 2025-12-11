pipeline {
    agent any

    stages {
        stage('Run Sonarqube') {
            environment {
                scannerHome = tool 'SonarTool'  // your scanner installation name
            }
            steps {
                withSonarQubeEnv('DevOps') {
                    sh """
                        ${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=DevOps \
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
