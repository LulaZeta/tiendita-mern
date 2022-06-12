# TIENDITA MERN

FRONT

1. npx create-react-app
2. npm i react-router-dom

BACK

1. run npm init in root folder
2. Update package.json set type: module
3. Add .js to imports
4. npm install express
5. create server.js
6. add start command as node backend/server.js
7. require express
8. create route for /
9. move product.js from fronted to backend
10. create route for /api/products // back run with de command: node server.js
11. return products
12. npm install nodemon --save-dev
13. Add start en package.json
    "scripts": {
    "start": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
    },
14. run: npm start

V8 FRONT END - Fetch Products from Backend

1. set proxy in package.jsin+
2. npm install axios
3. use state hook
4. use effect hook
5. use reducer hook

V9 Manage State By Reducer Hook FRONT END

1. Define reducer
2. update fetch data
3. get state from useReducer
4. npm install use-reducer-logger --force (debugger de state y ver cambios en el reducer )

V10 Bootstrap

1. Add Bootstrap UI Framework npm install react-bootstrap bootstrap
2. Update App.js
3. npm install react-router-bootstrap Esto es para LinkContainer

V11 Create Product and Rating Component

1. Create Rating Component
2. Use Rating component in Product component

V12 Create Product Details Screen

1. Fetch product from backend
2. create 3 comumns for image, info and action
3. npm install react-helmet-async //para q aparezca en la solapa el nombre del producto q estamos viendo

v13 SPINNER/message the backend

1. create loading component
2. use sinner component
3. create message component
4. create util.js to define getError function

v14 Implement Add to Cart

1. Create React Context
2. define Reducer
3. Create store provider
4. implement add to cart button click handle

V15 Complete Add To Cart

1. check existe item in the cart
2. check count in stock in backend

V16 Create Cart Screen

1. Create 2 columns
2. Display item list
3. Create action column

V17 Complete Cart Screen

1. Click handler for inc/des item
2. Click handler for remove item
3. Click handler for checkout

V18 Create Signin Screen(2:48)

1. Create sign in form
2. Add email and password
3. add signin button

V19 Connect to MongoDB Database - BACKEND (2:55)

1. Create atlas mongodb database
2. install local mongodb database // npm install mongoose, npm i dotenv
3. npm install mongoose
4. Connect to mongodb database

V20 Seed Sample Data

1. Create Product Model
2. Create User model
3. Create seed route
4. use route in server.js
5. seed sample product

V21 Seed Sample User

1. Create user Model // npm i bcryptjs
2. seed sample user
3. create user routes

V22 Create Signin Backend API

1. Create signin api
2. npm install express-async-handler
3. npm install jsonwebtoken
4. define generateToken

V23 Complete SignIn Screen

1. Handle submit action
2. Save Token in store and local Storage
3. Show user name in header
4. npm i react-toastify
