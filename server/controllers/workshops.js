import WorkshopMessage from '../models/workshopMessage.js'

export const getWorkshops = async (req,res) => {
    try {
        const workshopMessage = await WorkshopMessage.find()
        console.log(workshopMessage)
        res.status(200).json(workshopMessage)
    } catch(error){
        res.status(404).json ({message: error.message})
    }
}

export const createWorkshop = (req,res) => {
    const body = req.body;
    try {
        res.send('Workshop Creation');
    } catch (error) {
        
    }
}