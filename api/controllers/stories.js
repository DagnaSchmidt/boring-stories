import express from 'express';
export const storiesRouter = express.Router();
import Story from '../models/story';



//get all stories main info
storiesRouter.get('/', async (request, response) => {
    const stories = await Story.find({});
    //return partial info CHECK THIS!!!!!!!!!!!!!!!!!
    response.json(stories);
});


//get one story by id detailed info
storiesRouter.get('/:id', async (request, response) => {
    const story = await Story.findById(request.params.id);
    if(story) {
      response.json(story);
    }else {
      response.status(404).end();
    }
});


//add one story
storiesRouter.post('/', async (request, response) => {
    const body = request.body;

    if(!request.body.user){
      return response.status(401).json({error: 'invalid token'});
    }

    const newStory = new Story({...body});
    const savedStory = await newStory.save();

    response.status(201).json(savedStory);
})
