WeBake is a full-stack application built using modern web development technologies. It allows administrators to add new cake products with multiple images, categories, subcategories, sizes, and prices. Users can browse the available cakes and select sizes based on their preferences.

The project consists of a frontend built with React.js and a backend built with Node.js and Express.js. The backend also supports file uploads using Multer.
Technologies Used
Frontend

    React.js: A JavaScript library for building user interfaces.
    Axios: For handling HTTP requests to the backend.
    React-toastify: For toast notifications.
    CSS3 & Bootstrap: For styling and layout.

Backend

    Node.js: A JavaScript runtime for building scalable network applications.
    Express.js: A web application framework for Node.js.
    MongoDB: A NoSQL database for storing product information.
    Multer: For handling file uploads (images).
    JWT: For user authentication.

    Admin Panel

    Navigate to the /admin page (you may need authentication).
    Add new products with the product name, description, category, subcategory, images, sizes, and prices.

Browse Products

Users can browse available cakes, view details, and add them to their cart. Product information such as sizes and prices will dynamically adjust based on the admin’s input.
Features

    Product Management: Add, update, or delete cake products with details like size, price, and images.
    Image Upload: Upload multiple images for each cake using Multer.
    Dynamic Pricing: Set and display different prices based on product size.
    User-Friendly UI: An easy-to-use interface for both administrators and customers.
    Responsive Design: The frontend is mobile-friendly, built with responsive web design principles.

File Structure

php

WeBake/
│
├── backend/              # Backend source code
│   ├── controllers/      # Controllers for handling API requests
│   ├── models/           # MongoDB models (schemas)
│   ├── routes/           # Express routes for API endpoints
│   ├── middleware/       # Middleware (including Multer for file uploads)
│   └── server.js         # Main server file
│
├── frontend/             # Frontend source code
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── assets/       # Static assets like images
│   │   └── App.js        # Main React application file
│   └── public/           # Public directory for static files
│
├── README.md             # Project documentation
├── .gitignore            # Files and directories to be ignored by Git
└── package.json          # Project metadata and dependencies

website link : https://webake-frontend.vercel.app
admin panel : https://webake-admin.vercel.app 
