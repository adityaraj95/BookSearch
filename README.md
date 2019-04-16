# Search Book Using React.js, Google Books API, and MySQL.

Search local database using Rest API created by me [here](https://github.com/adityaraj95/SpringBoot-MySQL-REST-API.git) 

React is used along side JavaScript for Validation and Search process.


## How to install and run this project

Clone / Download the project using the following command

### `git clone https://github.com/adityaraj95/BookSearch.git`

go into the directory where the clone is created and type the following command

### `npm install`

Final Step will be to start the localhost server

### `npm start`

This will start the development server and you can view the project in the browser at [http://localhost:3000](http://localhost:3000)


It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Working

### Invalid ISBN Number

![Not Starting from 9 or length not equal to 13](https://github.com/adityaraj95/BookSearch/blob/master/src/Components/invalidISBN.PNG)

### Valid ISBN and Not Read

![Fetching from Google Books API](https://github.com/adityaraj95/BookSearch/blob/master/src/Components/Search.PNG)
