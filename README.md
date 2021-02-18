# Tasker Application

Add tasks to authenticated user

## Setup

### Create dotenv file

Create dotenv file to contain application secrets

In the root of the project, create ".env" file and include lines:

```
PORT=3000
DB_CONNECTION=mongodb://127.0.0.1:27017/tasker-db
JWT_SECRET=thisisasecretformyapp
```

### Setup MongoDB

Download MongoDB tgz: https://www.mongodb.com/try/download/community
Unzip folder and rename to mongodb
Move binary to path you want (e.g. /path/to/mongo)
Add mongodb-data folder to the same path

Now you should have following structure:

/path/to/mongo folder should have the unzipped folder called mongodb and empty folder mongodb-data

Go to terminal and run: `/path/to/mongo/mongodb/bin/mongod --dbpath=/path/to/mongo/mongodb-data`

### Setup Application

npm install

npm start

should show: `Listening on port 3000`

## TODO

Read code and figure out what the application does

### Task #1.

Create user via API

Copy & Paste successful response to a txt file

### Task #2.

Login with your user

Copy & Paste successful response to a txt file

### Task #3.

Successfully Call /users/me API endpoint

Figure out how authentication works using JWT tokens

Copy & Paste successful response to a txt file
