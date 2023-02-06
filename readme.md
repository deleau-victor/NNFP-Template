# PENN Template

> Simple fullstack template with PENN stack with NextJS and NestJS.

<div align="center" style="width: 100%; display: flex; justify-content: space-between; align-items: center, gap: 1rem;">
  <img src="https://www.deleauvictor.fr/images/icons/Database/PostgreSQL.svg" width="64px" height="64px"/>
  <img src="https://www.deleauvictor.fr/images/icons/Frameworks%20Back/express.svg" width="64px" height="64px"/>
  <img src="https://www.deleauvictor.fr/images/icons/Frameworks%20Front/nextjs.svg" width="64px" height="64px"/>
  <img src="https://www.deleauvictor.fr/images/icons/Frameworks%20Back/nestjs.svg" width="64px" height="64px"/>
</div>

## Tools

<div style="width: 100%; dipslay: flex;">
  <ul style="width: 45%;">
  <h3>FrontEnd</h3>
    <li><a href='https://www.typescriptlang.org/'>TypeScript</a></li>
    <li><a href='https://nextjs.org/'>NextJS</a></li>
    <li><a href='https://tailwindcss.com/'>TailwindCSS</a></li>
    <li><a href='https://sass-lang.com/'>SASS</a></li>
    <li><a href='https://postcss.org/'>PostCSS</a></li>
    <li><a href='https://redux-toolkit.js.org/'>Redux Toolkit</a></li>
    <li><a href='https://axios-http.com/'>Axios</a></li>
    <li><a href='https://react-hook-form.com/'>React Hook Form</a></li>
    <li><a href='https://github.com/fkhadra/react-toastify'>React Toastify</a></li>
  </ul>
  <ul style="width: 45%;">
  <h3>BackEnd</h3>
    <li><a href='https://expressjs.com/'>Express</a></li>
    <li><a href='https://nestjs.com/'>NestJS</a></li>
    <li><a href='https://github.com/nestjs/config'>NestJS Config</a></li>
    <li><a href='https://github.com/nestjs/typeorm'>NestJS TypeORM</a></li>
    <li><a href='https://github.com/nestjs/jwt'>NestJS JWT</a></li>
    <li><a href='https://github.com/nestjs/passport'>NestJS Passport</a></li>
    <li><a href='https://www.postgresql.org/'>PostgreSQL</a></li>
    <li><a href='https://www.npmjs.com/package/bcrypt'>Bcrypt</a></li>
  </ul>
</div>

## Installation

First use this repository as template or use the following command to create a project with npx :

```bash
# Doesn't work for this moment
$ npx create-penn-app
```

### Started

_you can use npm, yarn or pnpm as your choice_

```bash
# Go into client folder and install it's dependencies
$ cd client
$ yarn

# Then make the same for server folder
$ cd ../server
$ yarn
```

Then modify the **.env**, **database.env** files and **docker-compose.yaml** if you need to match with your preferences and don't forget to add .env files to **.gitignore**

### Develop

First create the docker container with theses following commands :

```bash
$ cd server
$ docker compose up
```

Then you need to start two terminal to run the app

First start the server app :

```bash
$ cd server
$ yarn dev
```

Then start the client app :

```bash
$ cd ../server
$ yarn dev
```

### Build

To build the app use theses following commands :

```bash
$ cd client
$ yarn build
$ cd ../server
$ yarn build
```

### Other Commands

#### Client

```bash
$ yarn dev          # launch development server
$ yarn build        # start the build of app
$ yarn start        # launch development server for production environment
$ yarn lint         # run eslint and fix eslint syntax error
```

#### Server

```bash
$ yarn start        # launch development server
$ yarn dev          # launch development server with hot refresh
$ yarn build        # start the build of app
$ yarn debug        # launch development server in debug mode
$ yarn prod         # launch development server for production
$ yarn format       # format the app with prettier
$ yarn lint         # run eslint and fix eslint syntax error
$ yarn test         # run jest
$ yarn test:watch   # run jest with --watch option
$ yarn test:cov     # run jest with --coverage option
$ yarn test:debug   # run jest with debug mode
$ yarn test:e2e     # run jest with e2e config
```
