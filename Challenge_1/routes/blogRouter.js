const router = require('express').Router();
const blog = require('../controllers/blogController');

router.post('/', blog.Create) 
router.get('/', blog.GetAll) 
router.get('/:id', blog.GetOne) 
router.put('/:id', blog.Update)
router.delete('/:id', blog.Delete) 

module.exports = router