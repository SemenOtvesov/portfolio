'use client';
import style from './style';
import Preview from './preview/index';
import Recommendations from './recommendations/index';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import SchemBuying from './schemBuying';
import Info from './info/index';
import Question from './question/index';

export default () => {
    const { Container } = style();
    return (
        <Provider store={store}>
            <Container>
                <Preview />
                <Recommendations />
                <SchemBuying />
                <Info />
                <Question />
            </Container>
        </Provider>
    );
};
