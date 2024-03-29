const express = require('express');
const {connection} = require("./db")
const cron = require('cron');
const { sendInactiveUsersNotification, sendAbandonedCourseNotification } = require('./routes/notification');
const http = require('http');
const socketIo = require('socket.io');
const cors= require("cors")
const {userRouter} = require("./routes/userRoutes")
const {paymentRouter} = require("./routes/paymentRouter")
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = process.env.PORT || 3001; 
app.use(cors()) 
app.use(express.json());

app.use("/auth",userRouter)  
app.use("/payment",paymentRouter)        
// it will call sendInactiveUsersNotification at 10:00 Am
const jobInactiveUsers = new cron.CronJob('0 10 * * *', sendInactiveUsersNotification(io));
jobInactiveUsers.start();
// it will call sendAbandonedCourseNotification at 10:00 Am
const jobAbandonedCourses = new cron.CronJob('0 10 * * *', sendAbandonedCourseNotification(io));
jobAbandonedCourses.start();   
 
io.on('connection', (socket) => {
  console.log('A user connected');
 
});
   
server.listen(PORT, async() => {
	try{
		await connection 
		console.log("db is connected",PORT)
	}catch(err){
		console.log(err.message)
	}
  console.log(`Server is running on port ${PORT}`);
});
  