const express = require('express')
const router = express.Router();
const { getArticles } = require('../controller/articlesCtrl')

router.get('/blog', getArticles)

module.exports = router;