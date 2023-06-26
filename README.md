# crime-report
Make sure nodejs version: v20.3.1
1. Install packages

    Run `npm i` inside the client directory

    Run `npm i` inside the server directory

2. Build it in docker container

    Run `docker-compose up --build` inside the main project directory, eg: you pull all codes under "crimereport" directory

3. Access and manage MySql database

    Access the Adminer using route `http://localhost:8000/`. This is to access mysql database, the database name is "crimes", tables name is "crimes". All records has been automaticly imported through setup.sql. 
    To log in, use `mysql_db` as the server Username as `root` and password as `MYSQL_ROOT_PASSWORD`.

4. Access application

    To start interacting with the accordion application, open `http://localhost:3050/` on a browser.

5. Access and check API

    To start interacting with the api calls, open `http://localhost:3050/api/` on a browser.

    a. To check all crime records

    Open `http://localhost:3050/api/crimes` on a browser.

    b. To check all records by 'Reported Date'
    
    Open `http://localhost:3050/api/crimesbydate?reported_date="01/07/2019"` on a browser.

    Note: In order to check this api call properly, you can go to MySql console `http://localhost:8000/`, after logged in, click database "crimes" and click on table "crimes", and then click on "Select Data" tab, in there, you will see a list of all records, just select one record and click "edit". After edited one record reported_date to "01/07/2029", then open `http://localhost:3050/api/crimesbydate?reported_date="01/07/2029"` on a browser, now you should be able to see only one record showing on the window.

    c. To check 'Offence count' by 'Offence Level 1 Description'

    Open `http://localhost:3050/api/count` on a browser.

6. Unit Testing

    Run `npm run test` inside the client directory

7. Know Issue:

    You might notice a ws error showing in console after you run the application. After you open `http://localhost:3050/` on a browser, opened developer tool and checked "console" tab, you will notice there are constantly error "WebSocket connection to 'ws://localhost:3000/ws' failed", this is a known issue for creat-react-app:
    `https://github.com/facebook/create-react-app/issues/11779`. This is not showing for local developing, just after deployed into Docker container. I've tried some of the solutions, not worked for this application.