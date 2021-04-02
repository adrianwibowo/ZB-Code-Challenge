const router = require('express').Router()
blog = require('./blogRouter')

router.use('/blog', blog)
router.get('/', function(req, res, next) {
      res.send('<h1> <strong>Hello ZETTABYTE! 👋</strong> </h1>');
    });

module.exports = router