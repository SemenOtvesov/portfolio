'use client';
import style from './style';
import RightContent from './rightContent/rightContent';
import RedBlurContainer from '../redBlurContainer';

export type Tprops = {
    type: 'questions' | 'calc' | 'othersQuestions';
};

export default ({ type }: Tprops) => {
    const { Left, Title, Text, Description, size } = style();
    return (
        <RedBlurContainer>
            <Left>
                <Title>{TitleContent({ type })}</Title>
                <Text>{TextContent({ type })}</Text>
                {!size.isMobile && (
                    <Description>
                        Нажимая на кнопку, вы соглашаетесь с{' '}
                        <span>политикой обработки персональных данных</span>
                    </Description>
                )}
            </Left>
            <RightContent type={type} />
            {size.isMobile && (
                <Description>
                    Нажимая на кнопку, вы соглашаетесь с <br />
                    <span>политикой обработки персональных данных</span>
                </Description>
            )}
        </RedBlurContainer>
    );
};
function TitleContent({ type }: Tprops) {
    if (type === 'calc') {
        return 'Бесплатно рассчитаем стоимость и вышлем варианты автомобилей';
    }
    if (type === 'questions') {
        return 'Остались вопросы по покупке автомобиля?';
    }
    if (type === 'othersQuestions') {
        return 'Остались вопросы по покупке автомобиля?';
    }
}
function TextContent({ type }: Tprops) {
    if (type === 'calc') {
        return 'Оставьте бесплатную заявку, и мы свяжемся с вами любым удобным для вас способом для расчёта стоимости и обсуждения вариантов покупки автомобиля';
    }
    if (type === 'questions') {
        return 'Оставьте бесплатную заявку, и мы свяжемся с вами любым удобным для вас способом и ответим на все интересующие вас вопросы абсолютно бесплатно, мы ничего не навязываем - наша задача помочь определиться';
    }
    if (type === 'othersQuestions') {
        return 'Оставьте бесплатную заявку, и мы свяжемся с вами любым удобным для вас способом и ответим на все интересующие вас вопросы абсолютно бесплатно, мы ничего не навязываем - наша задача помочь определиться';
    }
}
