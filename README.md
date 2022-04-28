# Blue Vet Code Challenge

Hello! Thank you for the opportunity to show my skills via this code challenge. I don't use JavaScript very often at my current place of work, so I decided to take a little bit more time to refresh myself before starting this code challenge. It was very nice to stretch my legs again. I've forgotten how much I missed using React!

## Database

For the storage mechanism, I decided to use a database, specifically SQLite3. The portability of and ease of use of SQLite seemed like a perfect fit for such a small project.

## Backend

For the backend, I decided to use Node with Express so that I could spin up something pretty quickly while using JavaScript throughout the stack. It was my first time building a file endpoint with Express, so I did get a little tripped up using the multer package that was required. Especially due to the fact that file saving does not include file extensions in the save filename out of the box. Nothing a little googling can't fix.

## Frontend

For the frontend, I went with React via create-react-app. This is the flavor of JavaScript library that I first learned a few years ago, and I have missed using it. I have heard lots of good things about other libraries like Svelte and Vue.js, as well as their framework counterparts Next.js, SvelteKit, and Nuxt.js. When I have more time, I'd like to dig into them.

## Running this project

1. Navigate to the 'api' folder via bash terminal.
2. Install required packages with the command `npm install`.
3. Run the API with the command `npm start`.
4. In a new terminal instance, navigate to the 'front' folder.
5. Install required packages with the command `npm install`.
6. Run the frontend with the command `npm start`. A browser window/tab should open with the react frontend running.
