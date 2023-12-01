import express from 'express';

import {login,signup} from '../controllers/auth.js'
import {getAllUsers,updateProfile} from '../controllers/auth.js'
import auth from '../middlewares/auth.js'

router.post('/signUp',signup)
router.post('/login',login)

router.get('/getAllUsers',getAllUsers)
router.patch('/update/:id', auth,updateProfile)
export default router