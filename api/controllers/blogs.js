import express from 'express';
export const blogsRouter = express.Router();
import Blog from '../models/blog';



//get all blogs
blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({});
    response.json(blogs);
});


//get one blog by id
blogsRouter.get('/:id', async (request, response) => {
    const blog = await Blog.findById(request.params.id);
    if(blog) {
      response.json(blog);
    }else {
      response.status(404).end();
    }
});