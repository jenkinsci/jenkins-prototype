pipeline {
  agent {
    label 'linux-arm64-docker'
  }
  stages {
    stage('Deploy to preview site') {
      when {
        changeRequest target: 'master'
      }
      environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token')
      }
      post {
        success {
          recordDeployment('jenkinsci', 'jenkins-prototype', pullRequest.head, 'success', "https://deploy-preview-${CHANGE_ID}--jenkins-prototype-pr.netlify.app")
        }
        failure {
          recordDeployment('jenkinsci', 'jenkins-prototype', pullRequest.head, 'failure', "https://deploy-preview-${CHANGE_ID}--jenkins-prototype-pr.netlify.app")
        }
      }
      steps {
        sh('npm install && npm run build')
        sh('/usr/local/bin/netlify-deploy --siteName "jenkins-prototype-pr" --title "Preview deploy for ${CHANGE_ID}" --alias "deploy-preview-${CHANGE_ID}" -d ./build/')
      }
    }
  }
}
