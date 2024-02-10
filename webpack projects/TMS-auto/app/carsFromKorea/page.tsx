'use client';
import styleIndex from '@app/page/style';
import Preview from '@components/carsFrom/preview/index';
import Info from './info/index';
import Benefit from './benefit/index';
import Prise from '@ts/components/carsFrom/prise';

const titlePreview = 'Авто из Кореи';
const textPreview = `Авто из Кореи - теперь это реальность. Данное направление набрало очень сильные обороты в РФ из-за того, что вы можете приобретать автомобили марок Hyundai, Kia, Mercedes, BMW и т.д. с левым рулем на 10-20% дешевле рынка России. Наша команда поможет вам в поиске вашего автомобиля мечты, а так же организует доставку в ваш город!`;

export default () => {
    const { Container } = styleIndex();
    return (
        <Container>
            <Preview
                text={textPreview}
                title={titlePreview}
                backgroundName="carsFromKoreaPreview"
            />
            <Info />
            <Benefit />
            <Prise />
        </Container>
    );
};
