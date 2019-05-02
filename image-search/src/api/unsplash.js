import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 956e5cb0fc43ac4c0f5efda107672921678a8208d167f4554af38c73c89857c9'
      }
});
