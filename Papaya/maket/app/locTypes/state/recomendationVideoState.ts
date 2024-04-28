import { Duration } from 'iso8601-duration';

export type TrecomendationVideoState = {
    videoList: Array<Tvideo>;
};
type TvideoMain = {
    chanelPreview?: string;
    id: string;
    preview: string;
    title: string;
    publishedAt: Date;
    channelTitle: string;
    channelId: string;
    viewCount: number;
};
export interface Tvideo extends TvideoMain {
    duration: Duration;
}
export interface TvideoReq extends TvideoMain {
    duration: string;
}
