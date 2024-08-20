<<<<<<< HEAD
# code
=======
# Real Estate

The project is essentially about renting, buying, or selling your property to another person without the involvement of a third party. It includes a chat functionality to ensure proper communication between the seller or renter and the buyer.

This is made using a MERN (MongoDB, Express, React, Node.js) stack with socket.io that ensures real-time chat between the buyer and the seller. It consists of a backend API server, a React client-side application, and a WebSocket server.

## Features
- **Property Management**: List properties for rent, sale, or purchase.
- **Real-Time Chat**: Chat functionality between buyers and sellers using socket.io.
- **User Authentication**: Secure login and registration for users using JWT for authorization.
- **Post Management**: Save and manage property posts.
- **Responsive Design**: Mobile-friendly interface for seamless browsing.

## Technologies Used
- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **WebSockets**: socket.io
- **Authorization**: JWT (JSON Web Tokens)
- **Other Tools**: Git, GitHub, VSCode

  
## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/anveshas/estateapp.git
   cd estateapp
   ```
2. Navigate to the # API directory, install dependencies, and start the server:
```bash
   cd api
  npm install
  node start
```
The API server will start running on http://localhost:8800.

3. Copy the src, public and rest all code(except for the vscode, api and socket) source code to a folder named client (there was a mistake while pushing the code from my side):

```bash
  cd client
  npm install
  npm run dev
```
The React application will start on http://localhost:5173.

4. Navigate to the # socket directory, install dependencies and start the server:
  ```bash
  cd socket
  npm install
  npm start
```
The WebSocket server will start running on http://localhost:4000.
>>>>>>> a24eaec7112513414959270f8bd0f1e36c854191
