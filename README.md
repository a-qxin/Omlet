[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />
<p align="center">
  <a href="https://github.com/a-qxin/omelette/">
    <img src="./public/images/omlet-logo.png" alt="Logo" height="70">
  </a>

  <h3 align="center">Omlet</h3>

  <p align="center">
    A flashcard study app built by students for students. 
    <!-- <br />
    <a href="/">View Demo</a>
    ·
    <a href="https://www.buildconnect.io">BuildConnect</a>-->
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Design Process](#design-process) 
  * [Built With](#built-with)
* [Getting Started](#getting-started)<!-- * [Contact](#contact) -->
* [Acknowledgements](#acknowledgements)

## About The Project

[Omlet](https://github.com/a-qxin/omelette/) is a desktop flashcard study app built by students for students.

Our team of four (2 designers, 2 devs) came together via [BuildConnect](https://www.buildconnect.io) to design a web app that allows students to study more efficiently with a clean user experience + to have the option to organize flashcards in a hierarchical format.

This is an ongoing project.

### Design Process

See our team's process doc [here](https://drive.google.com/file/d/1_jRbWV8AJ_UtZRfgH_odVu6bytlavOL0/view).

### Built With

* [React](https://reactjs.org)
* [MongoDB](https://www.mongodb.com)
* [Node.js](https://nodejs.org/en/)
* [Mongoose](https://mongoosejs.com)
* [React Bootstrap](https://react-bootstrap.github.io)
* [Express](https://expressjs.com)
* [SwaggerUI](https://swagger.io/tools/swagger-ui/)

## Getting Started

To *clone* a local copy of this repository, use:
```
git clone https://github.com/a-qxin/omelette/
```

To *run* our app, we use the following:

frontend (port 8080):

``` 
npm i 

npm start
``` 

To run the backend (port 4000) alongside the frontend, also use:

```
# Run the backend server
cd backend
npm i
npm start

# Then, on a new terminal, navigate to the root directory of the repo
# and run the frontend with the following:
npm run start:fake
```

## Acknowledgements

* [BuildConnect](https://www.buildconnect.io)
* [Jason Watmore](https://jasonwatmore.com)'s tutorials

[contributors-shield]: https://img.shields.io/github/contributors/a-qxin/omelette.svg?style=flat-square
[contributors-url]: https://github.com/a-qxin/omelette/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/a-qxin/omelette
[forks-url]: https://github.com/a-qxin/omelette/network/members
[stars-shield]: https://img.shields.io/github/stars/a-qxin/omelette
[stars-url]: https://github.com/a-qxin/omelette/stargazers
[issues-shield]: https://img.shields.io/github/issues/a-qxin/omelette
[issues-url]: https://github.com/a-qxin/omelette/issues
