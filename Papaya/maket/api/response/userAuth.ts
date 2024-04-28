import axios from 'axios';
import { url } from './constants';

type TuserDataRes = {
    items: Array<{
        snippet: {
            title: '';
            thumbnails: {
                default: { url: string };
            };
        };
    }>;
};

export async function userAuth(code?: string): Promise<{ name: string; logo: string }> {
    const getUrl = code ? `${url}auth?code=${code}` : `${url}auth`;
    const data = (await axios.get(getUrl).then(data => JSON.parse(data.data))) as TuserDataRes;
    const userData = data.items[0].snippet;

    return { name: userData.title, logo: userData.thumbnails.default.url };
}
