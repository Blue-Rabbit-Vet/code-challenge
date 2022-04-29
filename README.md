## Setup

First clone the repository and navigate to the project folder:

```sh
$ git clone https://github.com/cwg83/blue-rabbit-code-challenge.git
$ cd blue-rabbit-code-challenge
```

Create the virtual environment:

```sh
$ python -m virtualenv env
```

Activate the virtual environment:

```sh
Windows:
$ env\Scripts\activate
Linux/Mac:
source env/bin/activate
```

Install the dependencies:

```sh
(env)$ pip install -r requirements.txt
```

Then navigate to the app folder inside the project folder and run the local server:
```sh
(env)$ cd calvin_api
(env)$ python manage.py runserver
```
The application will be viewable at `http://127.0.0.1:8000/calvin_api/`.

Notes:
```sh
I initially started creating the api in node.js because it is an environment that I haven't had the chance to play around with much and I figured I could try to learn something while completing the challenge. I soon realized that learning node while completing the challenge would not really be viable with the time I had allowed myself to finish, so decided to switch gears and build it in an environment that I am familiar with: Django.
```
```sh
The endpoint for the GET and PUT requests to view and add names to the database was up and working pretty quickly. Configuring the file upload took a bit longer, and I had to do some Googling to figure out the best way to handle file uploads in Django. I then spent a bit of time styling the website, as I wanted it to at least look presentable rather than keep the default table and form styles. I love that a Django application with a database and API can be deployed relatively quickly and I'm looking forward to learning more about it.
```
```sh
I also decided to deploy a live version of the challenge on pythonanywhere.com, which can be viewed here:
https://cwg83.pythonanywhere.com/calvin_api/
```
```sh
I'm looking forward to any feedback you have as well as the next steps in the application process.
```
