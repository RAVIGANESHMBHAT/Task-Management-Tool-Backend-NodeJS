const mongoose = require('mongoose')

const connectionURL = process.env.DATABASE_URL;

mongoose.connect("mongodb+srv://raviganeshm:Computer2%40@cluster0.fvf2b.mongodb.net/task-manager-backend-dissertation?retryWrites=true&w=majority", { useNewUrlParser: true})


