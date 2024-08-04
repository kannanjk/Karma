export interface IPostItractor {
   createPost(input: any): any
   GetAllPost(): any
   GetOnePost(input: any): any
   likePost(userid: any, postId: any): any
   getOnePost(input:any): any
   createComment(input:any): any
   getComment(input:any):any
}