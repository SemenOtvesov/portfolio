'use client';
import style from './style';
import NextImage from 'next/image';
import sawedInfo from 'img/icons/sawedInfo.png';
import { itemContainer } from '@app/page/style';

export default () => {
    const { Info, InfoContainer, Icon, IconBox } = style();
    const ItemContainer = itemContainer();
    return (
        <Info>
            <ItemContainer style={{ padding: 0 }}>
                <InfoContainer>
                    <IconBox>
                        <Icon>
                            <NextImage src={sawedInfo} alt="" />
                        </Icon>
                        <span>ВАЖНО!</span>
                    </IconBox>
                    Распил должен быть использован только на замену испорченных деталей
                    транспортного средства! Обратно собрать из распиленных частей целую машину
                    можно, но узаконить её в России не получится. Передвигаться на таком авто
                    нелегально. Поэтому тип привоза автомобиля распилом служит исключительно как
                    запчасти, либо обновления уже существующего авто.
                </InfoContainer>
            </ItemContainer>
        </Info>
    );
};
