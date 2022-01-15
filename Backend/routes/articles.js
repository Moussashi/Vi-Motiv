const express = require('express')
const router = express.Router();
const { getArticles } = require('../controller/articlesCtrl')

router.get('/', getArticles)

module.exports = router;