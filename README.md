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

FRONT END - Fetch Products from Backend

1. set proxy in package.jsin+
2. npm install axios
3. use state hook
4. use effect hook
5. use reducer hook
