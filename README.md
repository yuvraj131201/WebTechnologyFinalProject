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

### Database Schema Design

**Products Schema (MongoDB)**

- `product_id`: String
- `description`: String
- `price`: Decimal
- `stock`: Integer
- `imageUrl`: String

**Cutomer Schema (MongoDB)**

- `customer_id`: Integer
- `password`: String
- `email`: String
- `first_name`: String
- `last_name`: String
- `address`: String
- `phone`: Integer

**Order Schema (MongoDB)**

- `order_id`: Integer
- `order_date`: Date
- `total_price`: Integer

**Payment Schema (MongoDB)**

- `payment_id`: Integer
- `payment_date`: Date
- `payment_method`: String

**Shipment Schema (MongoDB)**

- `shipment_id`: Integer
- `shipment_date`: Date
- `address`: String
- `city`: String
- `province`: String
- `postal_code`: String
- `phone`: Integer

### Frontend Setup

1. Basic structure set up for React components, including directories for components and services.
2. State management planned to handle user sessions and cart data.

### Notes

- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
