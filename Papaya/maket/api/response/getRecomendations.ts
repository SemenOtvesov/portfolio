import { Tvideo, TvideoReq } from '@app/locTypes/state/recomendationVideoState';
import axios from 'axios';
import { url as mainUrl } from './constants';
import { parse } from 'iso8601-duration';

export default async (name: string | undefined) => {
    const url = `${mainUrl}getMain` + (name != 'Вы не авторизованны' ? 'Auth' : 'NoAuth');
    const res = (await axios.get(url).then(data => JSON.parse(data.data))) as Array<TvideoReq>;
    const videoList: Array<Tvideo> = res.map(el => ({
        ...el,
        viewCount: +el.viewCount,
        duration: parse(el.duration),
    }));
    return videoList;
};
