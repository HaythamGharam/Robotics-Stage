import mongoose from 'mongoose'

const workshopSchema = mongoose.Schema ({
    title: String,
    message: String,
    selectedFile:String,
    date: {
        type: Date,
        default: new Date()
    },
});

const WorkshopMessage = mongoose.model ('WorkshopMessage', workshopSchema)

export default WorkshopMessage