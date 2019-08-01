# ConcileTime

Welcome to ConcileTime. 

## Blog Posts

[00 Naïve Sherpa : Meet The Naïve Sherpa](https://blogs.sap.com/2019/07/22/00-naive-sherpa-meet-the-naive-sherpa/)

## Project Structure

File / Folder | Purpose
---------|----------
`.pipleline/` | Piper configuration
`app/` | main application code
`db/` | database content
`domain/` | custom domain artifacts
`files/` | docs and the like
`srv/` | models and code
`tools/` | command line tools
`util/` | multitenant subscribe/unsubscribe code
`web/` | front-end UI(lame) and static content
`package.json` | project metadata and configuration
`readme.md` | this readme


## More...

Find more in the [help.sap.com](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/00823f91779d4d42aa29a498e0535cdf.html)

## Commands...

cf create-service conciletime-uaa

## CI/CD

In HANA2 SP04 XSA Node.js 10.15.3 for Linux x86-64    
In CF v1.6.49 node	10.15.3	cflinuxfs3           4


[Build Job in Jenkins](http://jenkins.sap-a-team.com:8080/job/ConcileTime/)

## Git Tags
```
git tag -a post00 -m "Naïve Sherpa : Meet The Naïve Sherpa"
git tag -a post01 -m "Naïve Sherpa : The Journey"

git push origin --tags
```

## Fix Jenkinsfile
[dockerExecute](https://sap.github.io/jenkins-library/steps/dockerExecute/)


## Set up ConcileTime for Subscriptions
Determine the Internal app name.
```
cf env concile_utl_v0 | grep -A 30 '"xsuaa":' | grep xsappname
```
Adjust the registry-config.json file.
```
vi registry-config.json
```
Create the saas-registry service instance and bind the module that serves the /callback/v1.0/tenants endpoint to it. 
```
cf cs saas-registry application conciltime-registry -c registry-config.json
cf bs concile_utl_v0 conciltime-registry
cf restage concile_utl_v0
```
Note, once you have subscribers, you won't be able to undeploy the app with --delete-services.
Make sure to unsubscribe all subscribers before undeploying.

You can however undeploy without deleting services and the UAA and HDI will remain.
```
cf undeploy conciletime -f
```

However, if the subsciber tries to go the the application, it will give this error.
404 Not Found: Requested route ('ct-sub0.conciletime.com') does not exist.

