import axios from 'axios';
const baseUrl = '/api/stories';

let token = null;

export const setToken = newToken => {
  token = `Bearer ${newToken}`;
};


export const getAllStories = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export const getOneStory = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};

export const createNewStory = async (data) => {
    const config = {
        headers: {
          Authorization: token
        },
      };

    const response = await axios.post(baseUrl, data, config);
    return response.data;
};

export const updateStoryDescription = async (data) => {
    const config = {
        headers: {
          Authorization: token
        },
      };

    const response = await axios.put(`${baseUrl}/${data.id}/description`, data.description, config);
    return response.data;
};

export const updateStoryImages = async (data) => {
    const config = {
        headers: {
          Authorization: token
        },
      };

    const response = await axios.put(`${baseUrl}/${data.id}/images`, data.description, config);
    return response.data;
};

export const deleteOneStory = async (id) => {
    const config = {
        headers: {
          Authorization: token
        },
      };

    const response = await axios.delete(`${baseUrl}/${id}`, config);
    return response.data;
};
