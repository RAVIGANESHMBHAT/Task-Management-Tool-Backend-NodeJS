const express = require('express')
const cors = require('cors');

require('./db/mongoose')
const userRouter = require('./routers/user')
//const taskRouter = require('./routers/task')

const app = express()


// app.use(cors({
//     origin: 'https://772c8e76trial.launchpad.cfapps.us10.hana.ondemand.com/4efbd0e5-5068-48b0-a935-cbbed1e048b3.taskmanagementtool.taskmanagementtool-0.0.1'
// }));

app.use(express.json())
app.use(userRouter)
//app.use(taskRouter)

module.exports = app