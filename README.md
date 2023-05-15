
# Youtube Video Sharing
Everyone can use the web application to post a YouTube video they enjoy. Additionally, they get access to another video that others have shared.


## Features
- Registry
- Login
- Keep Login Session Alive
- Watch Youtube Video
- Share Youtube Video
- Recieve Notification When There Is A New Video


## Technical and Library
**Client:** React, React-Router-Dom, Antd, Webpack, Sass, Universal-Cookie, Socket.io-client, Axios, Jest, @testing-library/react

**Server:** Node, Express, JsonWebToken, Express-Validator, Pg, Swagger, Socket.io, Cors, Bcrypt, Jest

## Installation
Clone the project
```bash
  git clone https://github.com/vtanh1905/youtube-video-sharing.git
```

**Client**

Install with npm
```bash
    cd client
    npm install
```

**Server**

Install with npm
```bash
    cd server
    npm install
```

**Note** using Nodejs Version `18.12.0`

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file at the root of the reponsitory

`NODE_ENV` : Environment we run the application (e.g, "development" or "production")

`PORT_WEBPACK_SERVER` : Port we start the client side of application to develop

`API_URL` : The URL of Web Api

`WEBSOCKET_URL` : The URL of Websocket

`PORT` : The application starts on this port number

`DATABASE_URL` : Database URL (e.g, postgresql://[username]:[password]@[hostname]:[port]/[database])

`DATABASE_SSL` : Turn on or off SSL when connecting to Database

`JWT_KEY` : The private key of Json Web Token

`GOOGLE_API_KEY` : The google api key to check Youtube Video exists and get information of the video

`ACCESS_CONTROL_ALLOW_ORIGIN` : the response can be shared with requesting code from the given origin (e.g, * or URL)


## Run Locally
**Note** : we must have the .env file at the root of the reponsitory (we are able to clone the .env.example and rename it to .env)
### # With docker-compose
Go to the project directory
```bash
  docker-compose up
```

### # Without docker-compose

#### Step 1: Set Up Database
**Using Docker**
```bash
  docker pull postgres
  docker run --name my-postgres -d -p 5432:5432 -e POSTGRES_PASSWORD=123456 postgres
```
**Not Using Docker**
Access the link and downkload postgresql version 15.2, then install it
(https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

#### Step 2: Initialize Schemas And Seed Data
Go to the project directory

```bash
  cd server
  npm run database:init
```
**Note :** After we run the above scripts, if the log shows the same the below image. It was successful.

![image](https://github.com/vtanh1905/youtube-video-sharing/assets/49771724/7e3a638d-b3d8-4ad1-9511-533a0a2341e9)

#### (Option 1) Step 3: Start Application
Go to the project directory
**Client**
```bash
  cd client
  npm run build
```

**Server**
```bash
  cd server
  npm run build
  npm run start
```

#### (Option 2) Step 3: Start Application with using Webpack-Dev-Server (recommend for coding)
**Client**
```bash
  cd client
  npm run start
```
**Note**: using webpack-dev-server to host client and the client call API from the server

**Server**
```bash
  cd server
  npm run build
  npm run start
```

## Running Tests

To run tests, run the following command

**Client**
```bash
  cd client
  npm run test
```

**Server**
```bash
  cd server
  npm run test
```


## Deployment
To deploy this web application to cloud. We should choose the third-party that support Docker (included docker build and docker run).
We decided to choose **Render** because it is free.

### # Render(https://render.com/)
**Step 1:** Sign Up and Login
![image](https://github.com/vtanh1905/youtube-video-sharing/assets/49771724/47aa4c14-3bd5-4437-8a31-6ae34144154b)

**Step 2:** Create Web Service and Connect to your reponsitory
![image](https://github.com/vtanh1905/youtube-video-sharing/assets/49771724/a77be20f-13af-40e2-976c-9fe1f845bc85)
![image](https://github.com/vtanh1905/youtube-video-sharing/assets/49771724/c108808c-d5ca-4a67-8580-d01c5188bc9b)
**Note :** Remember choose `Docker` type deployment

**Step 3:** Create PostgresSQL Service
![image](https://github.com/vtanh1905/youtube-video-sharing/assets/49771724/881f0205-bf08-482b-9876-9f697c8806f5)

**Step 4:** At Dashboard Page, Open Web Server that we create above. Then Add file .env in Enviroment Config
![image](https://github.com/vtanh1905/youtube-video-sharing/assets/49771724/34ccb25d-468c-4a2a-8c62-d5a4dec386cb)
![image](https://github.com/vtanh1905/youtube-video-sharing/assets/49771724/7f11a111-3ef3-498b-894e-f96927df06f3)

**Note :** Remember edit PORT, WEB_API, WEBSOCKET_URL, DATABASE_URL and DATABASE_SSL environment variable

## Screenshots

### #PC
![Screenshot 2023-05-15 164044](https://github.com/vtanh1905/youtube-video-sharing/assets/49771724/c37f4c30-0e83-4fdb-9971-58e708633889)

### #IPAD - Vertical
![image](https://github.com/vtanh1905/youtube-video-sharing/assets/49771724/c7a3b246-49e6-4930-adcd-bec145b2b5eb)

### #IPAD - Horizontal
![image](https://github.com/vtanh1905/youtube-video-sharing/assets/49771724/431f275a-5b5d-4e6f-9c0b-c4f32b76b3f0)

### #Mobile
![image](https://github.com/vtanh1905/youtube-video-sharing/assets/49771724/60d0c2d0-427e-4f7b-af2f-5370c70ba73b)


## Demo

Link: https://youtube-video-sharing.onrender.com/

## Usage
### #Registry

At the registry page, we have a registry form with 2 fields (include email and password).
#Email field: require and must be email type.
#Password field: require and must be from 6 to 15 characters.

**(Error)** If email and password fiels is not valid, the errors appear below the field.

**(Error)** If email exists, the error appears on the botton right of page.

**(Success)** if email and password is valid and correct, the notification appears at the bottom right of website. The registry page navigates to home page with email logined at the top right of home page.

### #Login
At any page, we have a login form with 2 fields (include email and password) at the top right of the website.
#Email field: require and must be email type.
#Password field: require and must be from 6 to 15 characters.

**(Error)** If email and pawssword is not correct, the errors appear at the botton right of the website after submitting.

**(Success)** if email and password is valid and correct, the notification appears at the bottom right of website. And the email logined at the top right of home page.

### #Keep Login Session Alive
If the user logined before, from the second time they access the website. The website will automatically login.
However, if they close the browser, the automational login will not work next time.

### #Watch Youtube Video
At home page, we watch the youtube videos. There are just 3 videos on the home page.
If we want to watch more videos, clicking the '...' button at the bottom of the home page. After that, there are other 3 videos appear.

### #Share Youtube Video
After we login in the website, there is a 'Share Video' button at the right of menu. 
At share video page, there is a share video form with one Youtube URL field.
#Youtube URL: require and the url match with format https://www.youtube.com/watch?v=videoId

**(Error)** If the youtube video url is not valid, there is an error text appear at the below Youtube URL field.

**(Error)** If the youtube video does not exist, there is an error appears at the bottom right of page.

**(Error)** If the youtube video existed at home page, there is an error appears at the bottom right of page.

**(Success)** If the youtube video is valid and does not exist at home page, the notification appears at the bottom right of page. And then the share page navigates to home page with the youtube video at the top of list videos

### #Recieve Notification When There Is A New Video
This feature is enable after we login.
If another person shares a new video, other people that logined in the website will recieve notification at the bottom right of page. And at home page, the new video appears at the top of list video at home page.
