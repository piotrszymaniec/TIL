# Heroku deployment
## 1. Set account
Assuming you don't have heroku account.
Go to [https://heroku.com](heroku.com).

## 2. Install heroku cli in terminal
```
npm install -g heroku
```

## 3. Type in your account creditentials with cli :
```
heroku login -i
```
or with authentication via web
```
heroku login
```

## Create heroku repo for your app 
Go into your repo directory and from within execute below command.
Command will also set git remote in your repo for heroku deployment
```
heroku create APP_NAME
```
## Deploy master branch to heroku
```
git push heroku HEAD:master
```
