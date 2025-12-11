pipeline {
    agent any // Specifies that the pipeline can run on any available agent

    stages {
        stage('Run Sonarqube') {
            environment {
                scannerHome = tool 'DevOps';
            }
            steps {
              withSonarQubeEnv(credentialsId: 'DevOps', installationName: 'DevOps') {
                sh "${scannerHome}/bin/sonar-scanner"
              }
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project...' // Prints a message to the console
                // Add your build commands here, e.g., sh 'make build' or sh 'dotnet build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...' // Prints a message to the console
                // Add your test commands here, e.g., sh 'make check'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...' // Prints a message to the console
                // Add your deployment commands here
            }
        }
    }
}
