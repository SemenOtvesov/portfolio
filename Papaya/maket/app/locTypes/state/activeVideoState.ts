import { Tvideo } from './recomendationVideoState';

export type TactiveVideoState = { video: TfullVideo | undefined };

export interface TfullVideo extends Tvideo {
    userRaiting: string;
    chanelSubscriptions: string;
    likeCount: number;
    commentCount: number;
    description: string;
    player: string;
}
