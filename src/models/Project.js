const mongoose = require("mongoose");

const projectModel = mongoose.Schema({
    projectCode: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

const Project = mongoose.model("Project", projectModel)

module.exports = Project