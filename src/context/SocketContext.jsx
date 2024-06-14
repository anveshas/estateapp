// import { createContext, useEffect, useState } from "react";
// import {io} from "socket.io-client";

// export const SocketContext = createContext();

// export const SocketContextProvider = ({ children }) => {
//     const { currentUser } = useContext(AuthContext);
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     setSocket(io("http://localhost:4000"));
//   }, []);

//   useEffect(() => {
//     currentUser && socket?.emit("newUser", currentUser.id)
//   }, [currentUser, socket]);

//   return (
//     <SocketContext.Provider value={{ socket }}>
//       {children}
//     </SocketContext.Provider>
//   );
// };

import React, { createContext, useEffect, useState } from "react"; // Ensure React is imported
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:4000", {
      transports: ["websocket", "polling"], // Ensure proper transport methods
    });
    setSocket(newSocket);

    // Cleanup to disconnect socket on component unmount
    return () => newSocket.close();
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
