'use client';
import style from './style';

type Tprops = {
    item: {
        title: string;
        text: string | string[];
    };
};

export default ({ item }: Tprops) => {
    const { Item, ItemTitle, ItemText } = style();
    return (
        <Item>
            <ItemTitle>{item.title}</ItemTitle>
            {Array.isArray(item.text) ? (
                item.text.map(el => <ItemText>{el}</ItemText>)
            ) : (
                <ItemText>{item.text}</ItemText>
            )}
        </Item>
    );
};
