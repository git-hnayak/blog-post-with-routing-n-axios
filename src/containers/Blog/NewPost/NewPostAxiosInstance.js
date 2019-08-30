import axios from 'axios';

const NewPostAxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

NewPostAxiosInstance.defaults.headers.common['Autherization'] = 'AUTH TOKEN FROM NewPostAxiosInstance';

export default NewPostAxiosInstance;