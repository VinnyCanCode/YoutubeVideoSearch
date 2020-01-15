import axios from 'axios';

const apiKey = 'AIzaSyBvjSe-5nvGKyA6rR6Alwn2iCsYPhQPB9c';

export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3`,
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${apiKey}`
  }
});
