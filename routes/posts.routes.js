const {Router} = require ("express");
const { getAllPosts,
        createPosts,
        formCreateNewPosts,
        formUpdatePosts,
        updatePosts,
        deltePosts} = require("../src/controllers/posts.controllers");

const router = Router ();

router.get('/', getAllPosts)
router.get('/create', formCreateNewPosts)
router.post('/' , createPosts)
router.get('/update/:id', formUpdatePosts)
router.post('/update',updatePosts)
router.get('/delete/:id', deltePosts)

module.exports = router;