import getVideo from '@maket/api/response/getVideo';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getVideoThunk = createAsyncThunk(
    'activeVideoState/getVideoThunk',
    async (videoId: string) => {
        return await getVideo(videoId);
    },
);
