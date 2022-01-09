const express = require ('express');

const router = express.Router();

const {protect, admin} = require('../middleware/authMiddleware');

const {
    registerUser,
    loginUser,
    getAllUsers,
    deleteUser
} = require('../controllers/userControllers');

router
    .route('/')
    .post(registerUser)
    .get(getAllUsers);

router  
    .route('/:id')
    .delete(protect, admin, deleteUser);



router.post('/login',loginUser);


module.exports = router;




