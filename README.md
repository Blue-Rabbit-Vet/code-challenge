
# Blue Rabbit Code Challenge

Name: Ross McLain <br>
Personal Website: [www.mclaindevelopment.com](https://www.mclaindevelopment.com) <br>

# My Solution
I built my solution using Next.JS because it is the best full-stack framework I have used 
for quickly spinning up robust full-stack applications. Next.Js uses React for all of its frontend code, 
it has an extremely intuitive routing system, and because it runs on node.js in the backend it gives the ability 
to build out secure backend api routes.

My entire stack for this project:
- Next.JS
- React
- TypeScript
- SCSS
- JSON
- Bootstrap (mostly for familiar utilities)
- Font Awesome for icons

For this project I knew I needed to build something that could be run locally without any hassle. 
Because of this I chose to forgo a standard database and instead refreshed my memory on reading and writing to a file 
from the api layer of Next.JS. This then led to me building out a simple users.json file in the data directory 
which is used as the "database" for this project. I wanted the person reviewing my code to be able to run the solution 
without any external installations and without having to enter in authentication details that I would have had to 
share insecurely through GitHub. Normally for any sort of production application of mine, I would use PostgreSQL 
as my main database technology, with prisma as my tool of choice to interact with it. That being said this exact system could scale without sql if 
I implemented Redis for storing the json data.

One of the constant (and welcome) challenges I would say with react, is the process of taking a step back and determining if a component 
can be improved by breaking it down further into more reusable pieces. I believe there are some spots where I could further 
refine components, but in keeping with the time constraints, I decided that my solution was in a good state.

Another challenge was deciding how to best store images alongside the names for users. I decided to restrict file types to
.jpeg, .png, .jpg, .gif and I chose to restrict file sizes to 1MB because more than that was causing a submission issue at the api layer. I am
sure there are ways to increase the capacity of data transfer to the api, but for this challenge I didn't spend time investigating.

If I were to continue this project I would definitely add unit testing. As it wasn't one of the requirements I did not spend
time building them, but I wouldn't call any of my solutions' production ready without unit tests. I have used jest and cypress in a few
small projects, and I would implement both if given more time.

Finally, I had some fun working on the styling. I used bootstrap, because I am in the habit of using the flex utilities, but 
I have been exploring tailwindcss and some other options in my free time to see what will work best for my future development.
Aside from bootstrap I used SCSS and tried to separate styling into global, and specific stylesheets. I used the [https://bluerabbit.vet/](https://bluerabbit.vet/) website
as a basis for my color scheme as well as font family so when reviewed, my project would have a familiar look and feel.




# Instructions to run:
### Getting Started
First, download the project and run a fresh installation:


```bash
npm install
```


Next, you can run the development server:

```bash
npm run dev
```

Or alternatively, to run an optimized version of the code:

```bash
npm run build
# then 
npm run start
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For requirement #1, I have built an api endpoint that returns my name here: [http://localhost:3000/api/name](http://localhost:3000/api/name).

For requirement #3, I have built an api endpoint here: [http://localhost:3000/api/names](http://localhost:3000/api/names) that takes:
- GET - this returns the list of users entered into the "db" json file.
- POST - this will create a new user object and add it into the "db" json file.
- PUT - though I did not end up using the update functionality, PUT will update a user based on id.
- DELETE - this will delete a user object from the list of uses in the "db" json file.

The code that interacts with the data/users.json is in lib/db.ts and was based on some examples I found relating to reading/writing json to a file live
from the Next.JS api.


# Challenge Prompt:

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







    




