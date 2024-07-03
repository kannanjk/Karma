import express from "express";
import { createPost, deletePost, getPost, getTimeLinePost, likePost, updatePost, userPost } from "../Controllers/PostController.js";
// import { createComment, getComments } from "../Controllers/CommentControll.js"
const router = express.Router()

router.post('/', createPost) 
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.put('/:id/like', likePost)
router.put('/:id/dlte', deletePost)
router.get('/:id/timeline', getTimeLinePost)
// router.post('/comment', createComment)
// router.get('/:id/comment',getComments)
router.get('/getpost/:id',userPost)

export default router                                  