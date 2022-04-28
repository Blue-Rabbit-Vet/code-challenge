
# Blue Rabbit Code Challenge

Fork this repo and create a Full Stack app using languages and frameworks of your choice that 
*literally* introduces you to us. Submit your response back to us here in the form of a pull 
request or submit it to us privately. Please don't spend more than a couple hours on it. It's ok
if you don't finish, just tackle the requirements in order and take it as far as you can in the time frame.

Include A README with instructions on how to build/run the app. Use the README to let us know
why you chose the technologies you did. Notes on design patterns, challenges, or aspects
of your stack that you find interesting are also appreciated!

### Requirements
1. Create an API with an endpoint or operation that we can call that tells us your name. The shape of the data 
and the storage mechanism are up to you. It's ok if it takes no params and returns only your name.
2. Create a minimal frontend that calls your api and displays your name when we run it.
3. Add an API endpoint or operation that takes a name and stores it.
4. Add an input to the frontend that we can use to submit a name to the endpoint or operation you just created.  
5. Add an input to the frontend that lets us upload an image avatar and submit it to your API.

## Developer Notes
With this challenge I wanted to try a new tech stack, but I admittedly underestimated the time it would take to learn some of these on the spot given the time constraints.

The technologies were determined based off costs for deployment and the type of data that was needed for the project.

For the backend, MongoDB was a free option to host a database in a simple structure. With MongoDB the name and avatar image could be stored as documents with can be accessed through the URI. Mongoose has been a great option to query for use in CRUD operations with MongoDB databases. I had considered using postgreSQL to then host onto Heroku, but there's currently an exploit with Heroku so I elected for MongoDB.

For the frontend, I had considered adding different pages for the UI and have some optimizations of the renders through SSR which Next.js allows for quick set-up rather than through purely only React. There's also dynamic routing which is a really cool option as a developer to consider. This, however, was the first time where I tried building a monolith with only Next.js to serve an API for MongoDB and a frontend.

As for project structure, with a full stack project I would have prefered to split my project into two different repositories where I could host them individually. I've found that it provides a lot of freedom in terms of development, there's less merge conflicts this way and if the application runs into problems only the affected service is down. But since I planned on submitting this through a single PR the project is written as a monolith. Typescript was also added to check for typing errors, but it isn't fully implemented in the project. Yarn as a package manager in my experience has been a lot quicker than NPM so it's been my manager of choice since.

Some of the challenges I had were as mentioned, organizing the project and learning how Next.js handles API. Time was also a big challenge as I leave this challenge incompleted since a bulk of my time was spent looking at documentation for Next.js APIs and handling some tyepscript errors. If you were to run the application at this moment in time, the API has issues in the connectDatabase function so calls to the API are throwing errors. This affects the frontend as well since axios calls to the backend will error out, making the frontend not interactable with my current approach. 

WIth more time my plans for the full stack was to send HTTP requests to my MongoDB database that would update the documents with a new name and/or image stored as base64 strings. Also the frontend, has barely any styling which would need some time to work on by adding a component library like Material UI to quickly get stylized components. 

Overall, I ended up learning a lot from this excercise and will probably work on this again in a familiar stack (PERN) as I'm curious the time it'd take to set up in comparison.

## Getting Started

These instructions will get you a copy of the project running locally for development and testing purposes.

### Requirements
- MongoDB
- Git
- Node.js

## Installation
Clone this respository
```bash
$ git clone https://github.com/leewes5928/wesley-code-challenge.git
```
Install all dependencies using yarn
```bash
$ cd app
$ yarn install
```
Create a .env.local file within the app directory
```bash
$ touch .env.local
```
### Environmental Variables
Set environmental variables in the .env.local file for the URI and name of the database of your MongoDB cluster
```
DB_URI = mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database_name>?retryWrites=true&w=majority
DB_NAME = <database_name>
```
## Scripts
Within the package.json file there are scripts to help build and run the project locally

To run a local development server on localhost:3000 (by default)
```bash
$ yarn run dev
```

To create build files for deployment
```bash
$ yarn run build
```

To serve static files locally
```bash
$ yarn run start
```




