# WTWR (What to Wear?): Back End

The back-end project is focused on creating a server for the WTWR application. You’ll gain a deeper understanding of how to work with databases, set up security and testing, and deploy web applications on a remote machine. The eventual goal is to create a server with an API and user authorization.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

### Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12

## Technologies And Techniques

Node.js — runtime environment for building the server-side application.

Express.js — framework used to handle routing, middleware, and RESTful API structure.

MongoDB — NoSQL database for storing users and clothing items.

Mongoose — ODM (Object Data Modeling) library for defining schemas, models, and handling database operations.

Validator — library used in schemas to validate fields such as imageUrl (ensures correct URL format).

RESTful API principles — clear separation of endpoints for CRUD operations (create, read, update, delete).

Error handling middleware — custom error responses for validation errors (400), not found (404), and server errors (500).

Git & GitHub — version control and project hosting.

ESLint/Prettier (if you used them) — for code consistency and style.
