const express = require('express');
const router = express.Router();

// Controle si l'email de l'utilisateur est déja enregistrer
const userCtrl = require('../controllers/users');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/delete/:id', userCtrl.deleteUser);
router.get('/users', userCtrl.getAllUser);
router.get('/user/:id', userCtrl.getOneUser);
router.post('/update/:id', userCtrl.modifyUser);

module.exports = router;