pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        slackSend "Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        sh 'echo build-step'
        sh 'node --version'
        sh 'npm --version'
        sh 'npm install'
        sh 'npm run build'
      }
    }
   
  }
  post {
    always {
      echo 'Process finished'
      deleteDir()
    }
    success {
      echo "Yay! succeeded! 😎"
    }
    failure {
      echo "Well, Build failed 💀"
    }
  }
}