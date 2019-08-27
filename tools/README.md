In order to deploy the ConcileTime application into a new space and register is for multitenant use, follow these instructions.

In this example, If I wanted to set up a space for User Acceptance Testing(UAT) for version 9 of conciletime, I'd use the following.

Run the scripts in the prescribed order from the main application folder.

First create the space and variations of the required files that are used to build conciletime in this space for this version.
Run the prepare for deploy script.
```
tools/1_prep_deploy cf uat v9
```

With git, add these new files, commit and push them to your git repo.

Now set up a Jenkins job that pulls the proper version of the Jenkinsfile (JenkinsfileUAT here).

Trigger the Jenkins job and notice that it will fail, but will set up the application for the next step.

Now run the post deploy script.
```
tools/2_post_deploy cf uat v9
```

Trigger the Jenkins job again and verify that the build completes successfully.
Notice that you should be able to subscribe/unsubscribe to the version of conciletime in this space from any other subaccount other than the provider subaccount.

Continue developing/building/testing until you are ready to tear-down this version and space.

First, unsubscibe all your subscribers from this version of conciletime in this space.  If you run into difficulty or the app is not allowing unsubscriptions, follow the steps in this video.  [SAP HANA Academy - SAP CP MT: 06. RESTful API](https://www.youtube.com/watch?v=RjSKrDsnew0&list=PLkzo92owKnVx3Sh0nemX8GoSNzJGfsWJM&index=6)

Run the prepare to undeploy script.  It will give you hints for manually unsubscribing if you need it.
```
tools/3_prep_undeploy cf uat v9
```

Now you can undeploy conciletime.

Clean up the variations of files that go with this space and delete the space.
```
tools/4_post_undeploy
```

End...
