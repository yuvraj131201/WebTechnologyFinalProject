# E-Commerce Project

**Student Name**: Yuvraj Mehulbhai Jadeja 
**Student Number**: 8959963
**Date**: 22 July 2024

### Technology Stack

**Frontend**: ReactJS  
**Backend**: Node.js 
**Database**: MongoDB (Atlas)

### Pre-requirements

**Node.js** must be installed.
**npm** must be installed.
A **MongoDB Atlas** account and a configured database cluster.

### Installation Steps
1. **Clone the Repository/ Unzip the project from E-Conestoga submission page** 
2. **Navigate to the Project Directory**: cd e-commerce-project
3. **Install Dependencies**:
For the Backend : - `cd backend
npm install`
For the Frontend:  `cd ../frontend
npm install`


### Project Setup

1. **Start Front-end (ReactJS)**:
Enter the backend folder: `cd frontend`
Initialize ReactJS project by running following code in terminal :
`npm start`
2. **Start Back-end (Node.js)**: Open new terminal.
   Enter the backend folder: `cd backend`
   Initialize Node.js project by running following code in terminal :
   `node server.js`
3. **Open Project in Browser**: The app must start in browser when you run the frontend. If not, you can access it from http://localhost:3000/ directly.

### Project Walkthrough
1. Login Page :
You need to login using the username and password given below :
username : admin
password : password

2. Products Page :
After you log in, you can see the list of products where you can select quantity and add to the cart.

3. Shopping Cart Page :
When you click on 'add to cart' button, you will land to the shopping cart page.
There you can either place order or remove the item.

4. Checkout Page :
When you hit 'Place Order', you will be landing on checkout page.
You need to fill out necessary details and then you can place the order.



### Notes
- If you just launch the frontend, you won't be seeing any products until you launch backend.
- The order won't be placed if you entered invalid details.
