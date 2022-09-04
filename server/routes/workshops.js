import express from 'express'

import {getWorkshops, createWorkshop} from '../controllers/workshops.js'

const router = express.Router();

router.get('/', getWorkshops)
router.post('/', createWorkshop)

export default router