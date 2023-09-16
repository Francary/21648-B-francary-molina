const {Router} = require ("express");
const { getAllPosts,
        createPosts,
        formCreateNewPosts,
        formUpdatePosts,
        updatePosts,
        deltePosts,
        error404} = require("../src/controllers/posts.controllers");

const router = Router ();

router.get('/', getAllPosts)
router.post('/' , createPosts)
router.get('/create', formCreateNewPosts)
router.post('/update',updatePosts)
router.get('/update/:id', formUpdatePosts)
router.get('/delete/:id', deltePosts)
router.get('*', error404)

module.exports = router;