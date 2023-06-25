# crime-report
Run `npm i` inside the client directory

Run `npm i` inside the server directory

Run `docker-compose up --build` inside the main project directory, eg: you pull all codes under "crimereport" directory

Access the Adminer using route `http://localhost:8000/`. This is to access mysql database, the database name is "crimes", tables name is "crimes". All records has been automaticly imported through setup.sql. 
To log in, use `mysql_db` as the server Username as `root` and password as `MYSQL_ROOT_PASSWORD`.

To start interacting with the accordion application, open `http://localhost:3050/` on a browser.
To start interacting with the api calls, open `http://localhost:3050/api/` on a browser.

1. To check all crime records
Open `http://localhost:3050/api/crimes` on a browser.

2. To check all records by 'Reported Date'
Open `http://localhost:3050/api/crimesbydate?reported_date="01/07/2019"` on a browser, don't miss that ? mark and also "" wrapping the date.
Note: In order to check this api call properly, you can go to MySql console `http://localhost:8000/`, after logged in, click database "crimes" and click on table "crimes", and then click on "Select Data" tab, in there, you will see a list of all records, just select one record and click "edit". After edited one record reported_date to "01/07/2029", then open `http://localhost:3050/api/crimesbydate?reported_date="01/07/2029"` on a browser, now you should be able to see only one record showing on the window.

3. To check 'Offence count' by 'Offence Level 1 Description'
Open `http://localhost:3050/api/count` on a browser.