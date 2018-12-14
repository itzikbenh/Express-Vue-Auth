const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/session');
const passwordController = require('../controllers/password');
const userController = require('../controllers/user');

router.post('/password/email', passwordController.sendResetLink);
router.post('/password/reset', passwordController.reset);

router.get('/user', userController.getCurrentUser);
router.post('/register', userController.create);

router.post('/login', sessionController.create);
router.post('/logout', sessionController.delete);

module.exports = router;
