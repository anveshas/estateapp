import { Server } from "socket.io";

const io = new Server({
    cors:{
        origin: "http://localhost:5173/",
    },
});

let onlineUser = []

const addUser = (userId, socketId) => {
    const userExits = onlineUser.find((user) => user.userId === userId);
    if(!userExits){
        onlineUser.push({ userId, socketId });
    }
};

const removeUser = (socketId) => {
    onlineUser = onlineUser.filter(user => user.socketId !== socketId);
};

const getUser = (userId) => {
    onlineUser = onlineUser.filter(user => user.userId === userId);
};

io.on("connection", (socket) => {
    // console.log(socket);
    // socket.on("test", (data) => {
    //     console.log(data);
    // })
    socket.on("newUser", (user) => {
        addUser(userId, socket.id);
    });

    socket.on("sendMessage", ({receiverId, data}) => {
        // console.log(receiverId);?
        const receiver = getUser(receiverId)
        io.to(receiver.socketId).emit("getMessage", data);
    });

    socket.on("disconnect", ()=>{
        removeUser(socket.id);
    })
});

io.listen("4000");