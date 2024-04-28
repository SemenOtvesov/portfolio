import getRecomendations from '@maket/api/response/getRecomendations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export default createAsyncThunk(
    'recomendationVideo/getRecomendationVideo',
    async (name: string | undefined) => {
        return await getRecomendations(name);
    },
);
