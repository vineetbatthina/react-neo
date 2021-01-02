import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID q1a-gT-eoxdmynN_VHxvcQGXY4PGYsH1lqZEqRMA-ZU',
    }
});


