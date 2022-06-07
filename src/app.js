const express = require('express')
const cors = require('cors');

require('./db/mongoose')
const userRouter = require('./routers/user')
//const taskRouter = require('./routers/task')
const issueRouter = require('./routers/issue')

const app = express()


app.use(cors({
    origin: 'https://772c8e76trial.launchpad.cfapps.us10.hana.ondemand.com'
}));

app.use(express.json())
app.use(userRouter)
//app.use(taskRouter)
app.use(issueRouter)

module.exports = app