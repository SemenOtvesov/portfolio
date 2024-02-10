'use client';
import { useState } from 'react';
import style from './style';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default () => {
    const { Container, Item, Title, CheckBox, Text } = style();
    const [openOffice, setOpenOffice] = useState(true);

    return (
        <Container>
            <Item>
                <Title>
                    Офис в г. Владивосток
                    <CheckBox style={{ backgroundColor: openOffice ? '#22C55E' : '#ED2224' }} />
                    открыт
                </Title>
                <Text>
                    8 (800) 500-42-72
                    <ArrowOutwardIcon style={{ fontSize: '1.25em' }} />
                </Text>
            </Item>
            <Item>
                <Title>Напишите нам на WhatsApp</Title>
                <Text>
                    +7 999 888-77-66
                    <ArrowOutwardIcon style={{ fontSize: '1.25em' }} />
                </Text>
            </Item>
        </Container>
    );
};
