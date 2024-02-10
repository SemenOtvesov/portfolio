'use client';
import Image from '@ts/components/helpers/image/image';
import style from './style';

type Tprops = {
    step: {
        step: number;
        title: string;
        text: string;
    };
    notIcon?: boolean;
};

export default ({ step, notIcon = false }: Tprops) => {
    const { Container, TitleBox, TitleMain, Step, Title, Text, imageStyle } = style(step.step);

    return (
        <Container>
            <TitleBox>
                <TitleMain>
                    <Step>Шаг {step.step}</Step>
                    <Title>{step.title}</Title>
                </TitleMain>
                {!notIcon ? (
                    <Image
                        style={imageStyle}
                        imageName={`schemBuying/${step.step}`}
                        imageType="icon"
                        sourseMod={false}
                    />
                ) : (
                    ''
                )}
            </TitleBox>
            <Text>{step.text}</Text>
        </Container>
    );
};
