const router = require('express').Router();
const categoryController = require('../controllers/category');
const {ensureAuthentication} = require('../middlewares/auth.js');
// const bookController = require('../controllers/book')



router.get('/', categoryController.getAllCategories)

router.get('/:category', categoryController.categoryBooks)

router.post('/', categoryController.createCategory)

router.patch('/:id', categoryController.editCategory)

router.delete('/:id', categoryController.deleteCategory)

// router.get('/popular', categoryController.popularCategories)

/*
* GET /categories/search?q=ahmed
* Return array of categories objects with status code -> 200
* Or status code -> 404 For Error or no categories found
* */
router.route('/search').get(categoryController.search);

router.get('/popular/all', categoryController.popular);




module.exports = router;