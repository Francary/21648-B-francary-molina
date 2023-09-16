const {PostsModel} = require ('../models/Posts')

const getAllPosts = async (req, res) => {
    const allPosts = await PostsModel.findAll();
    res.render('index', {allPosts});
};

const error404 = async (req , res) =>{
    res.status(404).render('404')
}
const formCreateNewPosts = async (req, res) => {
    res.render('new-posts')
};

const createPosts = async (req , res) => {
   const{ title , content , image} = req.body ;
   await PostsModel.create({ title , content , image})
   res.redirect("/posts")
};

const formUpdatePosts = async ( req , res) =>{
    const postsId = req.params.id;
    const posts = await PostsModel.findByPk(postsId);
    if(!posts){
        return res.redirect('/posts')
    }
    res.render('update-posts',{posts})
}

const updatePosts = async (req , res) => {
    const{ id, title , content , image } = req.body ;
    const posts = await PostsModel.findByPk(id)
    await posts.update({title , content , image})
    res.redirect("/posts")    
};

const deltePosts = async (req , res) => {
    const postsId = req.params.id;
    const posts = await PostsModel.findByPk(postsId)
    await posts.destroy()
    res.redirect("/posts")
};


module.exports ={
    getAllPosts,
    createPosts,
    formCreateNewPosts,
    formUpdatePosts,
    updatePosts,
    deltePosts,
    error404
}