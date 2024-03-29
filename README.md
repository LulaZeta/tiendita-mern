# TIENDITA MERN

## App realizada con MongoDB, Express, React, NodeJS.



<div align="center">
 <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita01.jpg'  width=600>
     <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita02.jpg'  width=600>
     <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita03_ProductDetail.jpg'  width=600>
     <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita03_shoppingCart.jpg'  width=600>
    <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita03_ProductFilter.jpg'  width=600>
     <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita03_ProductShippingAddress.jpg'  width=600>
     <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita03_ProductPaymentMethod.jpg'  width=600>
     <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita03_ProductPreviewOrder.jpg'  width=600>
    <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita03_ProductOrder.jpg'  width=600>
     <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita_Admin_Dashboard.jpg'  width=600>
     <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita_Admin_ProductList.jpg'  width=600>
     <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita_Admin_ProductLEdit.jpg'  width=600>
     <img src='https://github.com/LulaZeta/tiendita-mern/blob/main/img/tiendita_Admin_OrdersList.jpg'  width=600>    
    </div>

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

V24 Create Shipping Screen

1. Create form inputs
2. Handle save shipping address
3. Add checkout wizard bar

V25 Create Sign Up Screen

1. Create input forms
2. Handle submit
3. Create backend api

V26 Implement Select Payment Method Screen

1. Create input form
2. handle submit

V27 Create Place Order Screen

1. show cart items, payment and adress
2. handle place order action
3. create order create api

V28 Implement Place Order Action

1. handle place order action
2. create order create api

V29 Create Order Screen

1. create backend api for order/:id
2. fetch order api in fronted
3. show order information in 2 columns

////// V30 Pay Order By PayPal ---necesita tarjeta de credito

1. generate paypal client id
2. create api to return client id
3. install react-paypal-js
4. use PayPalScriptProvider in index.js
5. use usePayPalScriptReducer in Order Screen
6. implement loadPayPalScript function
7. render paypal button
8. implement onApprove payment function
9. create pay order api in backend

V31 Display Order History //responsive Navbar

1. create order screen
2. Create order history api
3. use api in the fronted

V32 Create Profile Screen

1. get user info from context
2. show user information
3. create user update api
4. update user info

V33 Publish To Heroku

1. create and config node project //npm init
2. serve build folder in frontend folder
3. Create heroku account
4. connect it to github
5. Create mongodb atlas database
6. Set database connection in heroku env variables
7. Commit and push

V34 Add Sidebar and Search Box (5:48)

1. add sidebar
2. add search box

V35 Create Search Screen

1. show filters
2. create api for searching products
3. display results

V36 Create Admin Menu

1. define protected route component
2. define admin route component
3. add menu for admin in header

V37 Create DashBoard Screen

1. create dashboard ui // npm install --save react-google-charts
2. implement backend api
3. connect ui to backend

V38 Manage Products

1. create products list ui
2. implement backend api
3. fetch data

V39 Create product

1. create products button
2. implement backend api
3. handle on click

V40 Create Edit Product

1. create edit button
2. create edit product ui
3. dispaly product info in the input boxes

V41 Implement Update Product

1. create edit product backend api
2. handle update click

V42 Upload Product Image (no lo hice)

1. create cloudinary account
2. use the api key in env file
3. handle upload file
4. implement backend api to upload

V43 Delete Product

1. show delete button
2. implement backend api
3. handle on click

V47 List User

1. create user list screen
2. implement backen api
3. fetch and display users

V48 Edit User

1.  create edit button
2.  create edit product ui
3.  dispaly product info in the input boxes
4.  implement backend api
5.  handle edit click

V49 Delete User

1. add delete button
2. handle click action
3. implement backen api for delete

V52 Review Orders

1. create submit review form
2. handle submit
3. implement backend api for review

V44 List Orders

1. create order list screen
2. implement backen api
3. fetch and display orders

V42 Upload Product Image (no lo hice)

1. create cloudinary account (npm i cloudinary, npm i streamifier, npm install --save multer)
2. use the api key in env file
3. handle upload file
4. implement backend api to upload
