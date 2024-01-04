import express from 'express';
export const storiesRouter = express.Router();
import Story from '../models/story';



//get all stories main info
blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({});
    response.json(blogs);
});


//get one blog by id detailed info
blogsRouter.get('/:id', async (request, response) => {
    const blog = await Blog.findById(request.params.id);
    if(blog) {
      response.json(blog);
    }else {
      response.status(404).end();
    }
});
