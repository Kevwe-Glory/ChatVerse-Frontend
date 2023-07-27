import axios from 'axios'


const url = 'http://localhost:4000/api';


export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) =>  axios.post(url, newPost)