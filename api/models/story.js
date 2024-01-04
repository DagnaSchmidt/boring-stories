import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    prevImg: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    },
    description: {
        type: Text,
        required: true
    },
    images: {
        type: Array,
        required: true
    }
});

storySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Story = mongoose.model('Story', storySchema);
export default Story;
