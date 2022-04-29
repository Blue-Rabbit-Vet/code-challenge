## Setup

First clone the repository:

```sh
$ git clone https://github.com/cwg83/blue-rabbit-code-challenge.git
$ cd blue-rabbit-code-challenge
```

Create the virtual environment:

```sh
Windows:
$ python -m virtualenv env
Linux/Mac:
$ python3 -m virtualenv env
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
