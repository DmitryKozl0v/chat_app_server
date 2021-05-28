// path: api/login

const {Router} = require('express');
const {newUser} = require('../controllers/auth');

const router = Router();

router.post('/new', newUser);

module.exports = router;