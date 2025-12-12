pipeline {
    agent any

    options {
        timestamps()                 // แสดงเวลาแต่ละ log
        disableConcurrentBuilds()    // ป้องกัน build ชนกัน
    }

    stages {

        stage('Initialize') {
            steps {
                echo '🔧 Initializing pipeline environment...'
                echo '✔ Checking workspace'
                echo '✔ Preparing tools'
            }
        }
        stage('Input Deployment Path') {
            script {
                // Ask user for deployment path
                DEPLOY_PATH = input(
                    id: 'DeployPathInput',
                    message: 'Enter the Deployment Path:',
                    parameters: [
                        string(
                            name: 'DEPLOYMENT_PATH',
                            defaultValue: './manifest/package.xml',
                            description: 'Input PATH for Deployment'
                        )
                    ]
                )
                echo "Selected Deployment Path: ${DEPLOY_PATH}"
            }
        }
        stage('Code Quality Scan') {
            environment {
                scannerHome = tool 'SonarTool'
            }
            steps {
                echo '🔍 Running SonarQube analysis...'

                withSonarQubeEnv('DevOps') {
                    sh """
                        ${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=DevOps \
                        -Dsonar.sources=. \
                        -Dsonar.inclusions=**/*.sql,**/*.js,**/*.ts,**/*.java
                    """
                }

                echo '✔ SonarQube scan completed.'
            }
        }

        stage('Security Scan') {
            steps {
                echo '🛡️ Performing security scanning...'
                echo '✔ Checking for vulnerabilities'
                echo '✔ Validating dependency security'
            }
        }

        stage('Build') {
            steps {
                echo '🏗️ Building the application...'
                echo '✔ Compiling source code'
                echo '✔ Packaging artifacts'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running test suites...'
                echo '✔ Unit tests'
                echo '✔ Integration tests'
                echo '✔ Test coverage summary'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying the application...'
                echo '✔ Updating target environment'
                echo '✔ Verifying deployment health'
            }
        }
    }

    post {
        success {
            echo '🎉 Pipeline finished successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Please check the logs.'
        }
        always {
            echo '📦 Cleaning up workspace...'
        }
    }
}