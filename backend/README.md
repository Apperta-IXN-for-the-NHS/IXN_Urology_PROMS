# How to Set up locally

## Important: .env file

For obvious reasons we have not pushed the .env file containing the project secretes such as the mongodb URI and JWT secret token to this repo.
You must create your .env file and provide these secrets.

To make this process easier we have included a file named example.env in this repo (in the backend folder) with the correct key names already included. Simply change the values to your actual secrets and rename the file from example.env to .env which is already added in the .gitignore and won't be tracked by git.

The backend code for this project is written in TypeScript and so therefore during development and testing the server running locally is running TypeScript code.

To run the node server locally, first run:

- `npm install`

to install the required project dependencies.
after run:

- `npm run dev`

which will start the development server, if everything worked correctly a message in the console stating successful connection to the database should appear.

# How to set up for production

First, to compile this project from TypeScript to Javascript run:

- `npm run build`

this should produce a new folder named `dist` containing the compiled Javascript source code.
