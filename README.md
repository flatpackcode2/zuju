# Instructions

## Setup <a href="https://www.markdownguide.org" target="_blank">Learn Markdown!</a>
1. Make sure [Docker](https://docs.docker.com/get-docker/){:target="_blank"} is installed on your machine.
2. Run `docker compose up` at the root of this directory. This will set up the db called `zuju_db` and db client `adminer`
3. Ensure that version 18.x of [Node](https://nodejs.org/en/download/){:target="_blank"} in installed on your machine.
4. Run `npm i` at the root of this directory to install all required packages.
5. Run `npm run dev` at the root of this directory. This will start the server at (http://localhost:1337){:target="_blank"}

## Testing and querying
1. You can login to adminer to view and query the db at (http://localhost:8080){:target="_blank"}. The details are as follows:
        - user: root
        - password: mypassword
        - server: zuju_db
        - db: local_db
2. To query the fixtures listing, you may use the [Postman]() and query the server at the following url: `http://localhost:1337/fixture?page=<the page you want to query next>&limit=<number of entries to show in this page>`
3. To run the unit tests, run `npm run test`

## Description
1. I have taken the liberty of setting the database as a docker image to simplify things.
2. This sample project currently does not have any caching aside from the built in caching that mySQL has.
3. The Sequelize ORM is used and appropriate models were set up.
