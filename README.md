E-Commerce Website

Welcome to the E-Commerce Website, an online platform that allows users to browse and purchase a variety of products. This project is built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and aims to provide a full-featured online shopping experience.
Features

    User Authentication & Authorization: Secure user registration and login system with JWT-based authentication.
    Product Management: Add, edit, delete, and view products (for admins), and browse available products (for users).
    Shopping Cart: Users can add/remove products to/from the shopping cart.
    Order Management: Users can place orders, and admins can manage orders.
    Payment Integration: Integrates payment gateway for online transactions.
    Responsive Design: Fully responsive design to ensure usability across devices.
    Admin Dashboard: A dashboard for admins to manage products, orders, and users.

Tech Stack

    Frontend: React.js (with Hooks and Context API for state management)
    Backend: Node.js, Express.js
    Database: MongoDB
    Authentication: JSON Web Tokens (JWT) & bcrypt.js for password hashing
    Payment Gateway: Integration with a third-party payment system (e.g., Stripe, PayPal)

Installation
Prerequisites

Ensure you have the following installed:

    Node.js (v14+)
    MongoDB (local or Atlas)
    Git (optional)

Clone the Repository

bash

git clone https://github.com/tewa92/E-Commerce.git
cd ecommerce-website

Backend Setup

    Navigate to the backend folder:

bash

cd backend

    Install backend dependencies:

bash

npm install

    Create a .env file in the backend folder with the following variables:

bash

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYMENT_GATEWAY_API_KEY=your_payment_gateway_key

    Start the backend server:

bash

npm start

Frontend Setup

    Navigate to the frontend folder:

bash

cd ../frontend

    Install frontend dependencies:

bash

npm install

    Start the frontend development server:

bash

npm start

The frontend will be accessible at http://localhost:3000.
API Endpoints

    GET /api/products: Fetch all products
    GET /api/products/
    : Fetch a single product by ID
    POST /api/products: Add a new product (admin only)
    PUT /api/products/
    : Update a product by ID (admin only)
    DELETE /api/products/
    : Delete a product by ID (admin only)
    POST /api/orders: Create a new order
    GET /api/orders/
    : Fetch order details by ID (user/admin)
    POST /api/users/login: Authenticate and login a user
    POST /api/users/register: Register a new user

Screenshots

Add screenshots or gifs here to showcase the user interface and functionality of the website.
Deployment

This app is deployed on Render.com. You can visit the live site at:

Live Website
Contribution

Feel free to contribute by submitting a pull request. Here’s how you can get started:

    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Make your changes.
    Commit your changes (git commit -m 'Add some feature').
    Push to the branch (git push origin feature-branch).
    Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.
Contact

For any inquiries or support, feel free to contact:

Tewachew Saleigizer Akele
Email: tewachewsaleigizer@gmail.com
LinkedIn: linkedin.com/in/tewachewsale