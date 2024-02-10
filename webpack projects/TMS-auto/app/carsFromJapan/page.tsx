'use client';
import styleIndex from '@app/page/style';
import FullDuty from './fullDuty/index';
import Sawed from './sawed/index';
import Designer from './designer/index';
import Preview from '@components/carsFrom/preview/index';
import Prise from '@ts/components/carsFrom/prise';

const titlePreview = 'Авто из Японии';
const textPreview = `Наша команда поможет вам в покупке автомобиля из Японии. Чаще всего покупают авто
под полную пошлину, что это значит - это целый автомобиль, прошедший на территории
РФ полную процедуру таможенной очистки и имеющий все необходимые документы для
беспрепятственной постановки на учет в органах Госавтоинспекции РФ.`;

export default () => {
    const { Container } = styleIndex();
    return (
        <Container>
            <Preview
                text={textPreview}
                title={titlePreview}
                backgroundName="carsFromJapanPreview"
            />
            <FullDuty />
            <Sawed />
            <Designer />
            <Prise />
        </Container>
    );
};
