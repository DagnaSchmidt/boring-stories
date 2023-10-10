import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    }
});

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;