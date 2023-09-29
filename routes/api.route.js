const router = require('express').Router();
const authController = require('../controllers/authController')


router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});


//Router for User authentication
router.post('/register', authController.register);
// Login a user
router.post('/login', authController.login);
// Logout a user
router.post('/logout', authController.logout);

//Refresh token
//router.post('/refresh', authController.logout);



// router.post('/incidents', transactionController.create);
// router.get('/incidents', transactionController.read);
// router.put('/incidents/:id', transactionController.update);
// router.delete('/incident/:id', transactionController.delete);

module.exports = router;
