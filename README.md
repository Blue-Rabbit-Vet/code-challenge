# Blue Rabbit Code Challenge

## Tech Used

### Front End

- React18
- AxiosJS

### Back End

- ExpressJS
- AWS-SDK
- Multer
- MySQL2
- Sequelize

## Installation Instructions

Note: If you don't wish to run locally (or don't wish to set up an S3 Bucket) feel free to use the deployed application here: https://stormy-bastion-73399.herokuapp.com/

- Download project to your machine
- Create a `.env` file in the `server` folder and fill it out with the neccessary requirements. In this case I am using an AWS-S3 bucket for file uploading.
- In the project's root directory, open a terminal and run `npm install`. This will install dependencies for both client and server applications.
- To run the application in full, run `npm run develop`. This will use Concurrently to launch both the server and the front end client.

## My Process

My inital process when I read through your requirements was to create the application using the full MERN Stack (MongoDB, Express, React, Node). However, considering I only had to at most store a username and an image, I elected to use a MySQL database to keep things simple. Then I chose to approach the image uploading and storing problem. I elected to use an Amazon Web Services S3 Bucket as I am familiar with their operation. I utilized Axios on the front end to send the file information to my server, which then uploaded the file to my S3 bucket and updates the user's avatar key value in the database.

I set a timer for three hours to force myself to get everything you see done within that time. As such, there are some features that are in place for form error handling that I never got around to finishing, however Would be trival to implement into the JSX for my form components. I also overbuilt some of my back end as I had the idea to pull all my information onto the page using a single fetch request, but didn't have time to fully utilize it. I tend to overbuild the back ends because I like designing systems that can scale, so I'm always overbuilding in my mind as I work!

As far as design goes I went for a basic dark theme to be easy on the eyes, with some minimal CSS flexbox work for some responsiveness and stylings to help make it easier on the eyes. I also added pictures of my cat because I felt they would be enjoyed!
