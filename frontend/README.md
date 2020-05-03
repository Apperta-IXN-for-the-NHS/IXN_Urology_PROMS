# How to Set up locally

whilst in the frontend folder, run these commands in order

- `npm install`
- `ionic serve`

make sure ionic CLI is installed

- `npm install -g @ionic/cli native-run cordova-res`

Ionic should then automatically navigate to a web browser with the application running on localhost

# How to Build for native deployment on iOS or Android

In the root folder of this repo both iOS and android build folders are already included. In order to launch the application via these folders in Xcode or Android studio run the following commands respectively.

- `ionic cap open ios`
- `ionic cap open android`

However should you make changes to the source code (frontend) you will need to run the following commands in order to update your build folders to reflect those changes and the following commands should be run after changes to the source code have been made.

- `ionic cap copy`
- `ionic cap sync`

If for some reason there are no iOS or android folders present, whilst inside the frontend folder (this folder) run the following commands:

- `ionic build`
- `ionic cap add iOS`
- `ionic cap add android`

For more extensive information on the building and deployment please refer to the following:
[https://ionicframework.com/docs/react/your-first-app/6-deploying-mobile](https://ionicframework.com/docs/react/your-first-app/6-deploying-mobile)
