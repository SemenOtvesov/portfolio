'use client';
import style from './style';
import styleMain from '@app/readAuctionList/style';

const listInfo = [
    {
        title: 'S',
        text: 'Лучшая оценка из возможных. Как новое транспортное средство или возрастом менее 12 месяцев, с пробегом до 10 000 км',
    },
    {
        title: '6',
        text: 'Автомобиль возрастом до 3-х лет, в превосходном состоянии. Пробег до 30 000 км, шины с чётким рисунком протектора.',
    },
    {
        title: '5',
        text: 'Возраст автомобиля не имеет чётких ограничений, но при очень хорошем общем состоянии и пробеге менее 60 000 км',
    },
    {
        title: '4.5',
        text: 'Автомобиль так же, как и в оценке «5», может быть любого возраста и в очень хорошем состоянии. Может иметь до нескольких небольших царапин и/или вмятин. Пробег обычно до 100 т. км.',
    },
    {
        title: '4',
        text: 'Автомобиль любого возраста, но в хорошем состоянии. Царапины (А1 несколько царапин, А2 повреждениями покрыта 1/3 бампера, А3 почти вся площадь в царапинах) и вмятины (U1 малозначительные углубления, U2 заметные ямки, U3 хорошо видимые вмятины.). Может иметь ремонт (замену и/или покраску) двух — трёх элементов кузова, загрязнения и мелкие царапины в салоне. Пробег обычно до 100 т. км.',
    },
    {
        title: '3.5',
        text: 'Автомобиль любого возраста, но в хорошем/среднем состоянии. Есть более заметные царапины, вмятины и/или небольшие поверхностные повреждения кузова. Может требоваться ремонт кузова и/или был ремонт кузовных элементов, есть сколы краски. Пробег любой.',
    },
    {
        title: '3',
        text: 'Автомобиль любого возраста в удовлетворительном состоянии, с глубокими царапинами и/или вмятинами, поверхностными повреждениями кузова. Возможны технические недочёты — это дополнительно прописывается экспертом в аукционном листе.',
    },
    {
        title: '2',
        text: 'Автомобиль любого возраста, общее состояние очень плохое. Имеет сильные повреждения и требует частичного или даже полного ремонта. Такие автомобили обычно стоят очень дёшево.',
    },
    {
        title: '1',
        text: 'Автомобиль имеет серьёзные повреждения как кузовные так и технические («утопленник», последствия аварии).',
    },
    {
        title: 'O, R',
        text: 'При продаже перечисляются и описываются ремонтные работы. Это может быть замена и/или покраска любого элемента кузова или более мелкий ремонт. В остальном же автомобиль может быть в хорошем состоянии, но цены на машины с такой оценкой ниже.',
    },
    { title: 'RA', text: 'Ремонт, как правило, хорошего качества' },
    {
        title: 'RB',
        text: 'Сильный ремонт. Кузов и двигатель, возможно с вмешательством в несущие конструкции кузова',
    },
    {
        title: 'R1',
        text: 'Битое, отремонтированное, утопленники. Автомобиль, побывавший в серьёзной аварии и восстановленный после неё с вмешательством в несущие конструкции кузова',
    },
    { title: 'R2', text: 'Сильная коррозия кузова' },
    { title: '...', text: 'Продаётся как есть (обычно битый автомобиль)' },
];

export default () => {
    const { Container, Bacground, List } = style();
    const { TitleItems, Item, ItemTitle, ItemText } = styleMain();
    const ItemInst = Item(true);

    return (
        <Container>
            <TitleItems>Расшифровка оценки автомобиля в аукционном листе</TitleItems>
            <List>
                {listInfo.map((el, i) => (
                    <ItemInst key={el.title + i}>
                        <ItemTitle>{el.title}</ItemTitle>
                        <ItemText>{el.text}</ItemText>
                    </ItemInst>
                ))}
            </List>
            <Bacground />
        </Container>
    );
};