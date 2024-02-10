'use client';
import Breadcrums from '@ts/components/helpers/breadcrums';
import styleIndex, { itemContainer } from '@app/page/style';
import style from './style';
import LeftItem from './leftItem';

const itemList = [
    { title: 'УЛ. 1-Я МОРСКАЯ 9', text: '1 этаж, офис 117' },
    { title: '10:00 - 19:00', text: 'С понедельника по пятницу' },
    { title: 'workmail@gmail.com', text: 'Наш почтовый адрес' },
    { title: 'Реквизиты компании', text: ['ИНН', 'ОГРН', '???', '???', '???'] },
];

export default () => {
    const { Container } = styleIndex();
    const ItemContainer = itemContainer();
    const { ContainerMain, Left, Title, Right } = style();

    return (
        <Container>
            <ItemContainer>
                <Breadcrums />
                <ContainerMain>
                    <Left>
                        <Title>Контакты</Title>
                        {itemList.map(el => (
                            <LeftItem item={el} />
                        ))}
                    </Left>
                    <Right>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.627066032023!2d131.87553447665383!3d43.11235168724243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb38defdc2695f7%3A0x21fd57f72e5f3de5!2zMS3RjyDQnNC-0YDRgdC60LDRjyDRg9C7LiwgOSwgMTE3LCDQktC70LDQtNC40LLQvtGB0YLQvtC6LCDQn9GA0LjQvNC-0YDRgdC60LjQuSDQutGA0LDQuSwg0KDQvtGB0YHQuNGPLCA2OTAwOTA!5e0!3m2!1sru!2snl!4v1707335970763!5m2!1sru!2snl"
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Right>
                </ContainerMain>
            </ItemContainer>
        </Container>
    );
};
