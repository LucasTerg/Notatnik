const express = require('express');
const router = express.Router();

const testActions = require('../actions/api/test');

router.get('/', testActions.home)
 
module.exports = router;
