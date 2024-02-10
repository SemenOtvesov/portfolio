'use client';
import style from './style';
import styleButton from '@components/helpers/button/style';

import useAppDispatch from 'ts/hooks/useAppDispatch';
import { useEffect } from 'react';
import getBrandListThunk from '@store/carState/asyncThunk/getBrandListThunk';
import Card from '@ts/components/helpers/carCard/card';
import setActiveBrandThunk from '@store/carState/asyncThunk/setActiveBrandThunk';
import { TurlParams } from '@locTypes/urlPath';
import { useParams } from 'next/navigation';
import setActiveModelThunk from '@store/carState/asyncThunk/setActiveModelThunk';
import useAppSelector from 'ts/hooks/useAppSelector';

export default () => {
    const { Container, Main, size } = style();
    const { BlackButton } = styleButton();
    const dispatch = useAppDispatch();

    const { brand, model }: TurlParams = useParams();
    useEffect(() => {
        dispatch(getBrandListThunk());
        dispatch(setActiveBrandThunk(brand));
        dispatch(setActiveModelThunk(`${brand} ${model}`));
    }, []);
    const list = useAppSelector(state => state.carState.activeModelList);

    return (
        <Container>
            <Main>
                {list.map(el => (
                    <Card
                        key={el.id}
                        card={el}
                        black
                        style={
                            size.isMobile
                                ? {
                                      marginBottom: 30,
                                      width: '100%',
                                      flex: '100%',
                                  }
                                : { marginBottom: 30, width: 'auto' }
                        }
                    />
                ))}
            </Main>
            <BlackButton>Ещё</BlackButton>
        </Container>
    );
};
