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
      junit 'dist/reports/**/*.xml'
      deleteDir()
    }
    success {
      slackSend "Yay! ${env.JOB_NAME} build ${env.BUILD_NUMBER} succeeded! 😎"
    }
    failure {
      slackSend "Well, Build failed 💀"
    }
  }
}