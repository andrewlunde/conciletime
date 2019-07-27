@Library('piper-library-os') _
node() {
    stage('prepare') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }
    stage('Build') {
        mtaBuild script: this
    }
    stage('deploy') {
        cloudFoundryDeploy script: this
        dockerExecute(dockerImage: 's4sdk/docker-cf-cli') {
          sh "cf api https://api.cf.us10.hana.ondemand.com --skip-ssl-validation"
          sh "cf l -u andrew.lunde@sap.com -p ObF8 -o ConcileTime -s dev"
          sh "cf map-route concile_web_v0 conciletime.com --hostname www"
        }
        slackSendNotification script: this
    }
}