import express from 'express';
export const storiesRouter = express.Router();
import Story from '../models/story.js';



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

    //check this also
    if(!request.body.user){
      return response.status(401).json({error: 'invalid token'});
    }

    //check if user type = admin

    const newStory = new Story({...body});
    const savedStory = await newStory.save();

    response.status(201).json(savedStory);
});


//update story (change description)
storiesRouter.put('/:id/description', async (request, response) => {
  const body = request.body;
  const storyToUpdate = await Story.findById(request.params.id);

  //check this also //check if user type = admin
  if(!request.body.user){
    return response.status(401).json({error: 'invalid token'});
  }

  if(!storyToUpdate){
    return response.status(400).json({error: 'invalid id'});
  }else if(body.description.length < 20 || !body.description){
    return response.status(400).json({error: 'description too short'});
  }else{
    const updatedStory = await Story.findByIdAndUpdate(request.params.id, {description: body.description});
    response.status(201).json(updatedStory);
  }

});


//add image to story
storiesRouter.put('/:id/images', async (request, response) => {
  const body = request.body;
  const storyToUpdate = await Story.findById(request.params.id);

  //check this also //check if user type = admin
  if(!request.body.user){
    return response.status(401).json({error: 'invalid token'});
  }

  if(!storyToUpdate){
    return response.status(400).json({error: 'invalid id'});
  }else{
    const updatedStory = await Story.findByIdAndUpdate(request.params.id, {images: [...storyToUpdate.images, ...body.images]});
    response.status(201).json(updatedStory);
  }

});


//delete a story
storiesRouter.delete('/:id', async (request, response) => {
  const storyToDelete = await Story.findById(request.params.id);

  //check if user type = admin
  if(!storyToDelete){
    return response.status(400).json({error: 'invalid id'});
  }else{
    const deletedStory = await Story.findByIdAndDelete(request.params.id);
    response.status(204).end();
  }

});
