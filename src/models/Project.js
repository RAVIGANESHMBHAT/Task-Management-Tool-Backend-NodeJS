const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    projectCode: {
        type: String,
        required: true,
        unique: true
    },
    projectName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

projectSchema.methods.toJSON = function () {
    const project = this;
    const projectObject = project.toObject()

    delete projectObject.createdAt
    delete projectObject.updatedAt

    return projectObject
}

const Project = mongoose.model("Project", projectSchema)

module.exports = Project