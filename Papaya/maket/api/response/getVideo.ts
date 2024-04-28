import axios from 'axios';
import { url } from './constants';

export default async (videoId: string) => {
    const res = (await axios.get(`${url}/getVideo?videoId=${videoId}`)).data;
    return JSON.parse(res);
};
