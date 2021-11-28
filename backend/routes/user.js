const express = require('express');
const router = express.Router();

// Gestion du nombre de requêtes utilisateurs
const limiter = require('../middleware/limiter');
const auth = require('../middleware/auth');
// Controle si l'email de l'utilisateur est déja enregistrer
const userCtrl = require('../controllers/users');
// Controle la forme du mot de pass pour forcé l'utilisateur a le complexifier pour la sécurité
const passwordValidation = require('../middleware/password-validation');
// Controle que seul l'utilisateur propriétaire peut effectuer certaine action sur son comptes
const user = require('../middleware/user');


router.post('/signup', passwordValidation, userCtrl.signup);
router.post('/login', limiter, userCtrl.login);
router.delete('/delete/:id', auth, user, userCtrl.deleteUser);
router.get('/users', userCtrl.getAllUser);
router.get('/user/:id', userCtrl.getOneUser);
router.post('/update/:id', auth, user, userCtrl.modifyUser);


module.exports = router;