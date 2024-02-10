'use client';
import Link from 'next/link';
import style from './style';
import { usePathname } from 'next/navigation';
import AuctionListBody from '@ts/components/helpers/auctionListBody';

export default () => {
    const { Container, Title, TitleText, TitleLink } = style();

    const pathName = usePathname();
    const country = pathName.includes('statisticsKorea')
        ? 'korea'
        : pathName.includes('statisticsJapan')
          ? 'japan'
          : undefined;

    return (
        <Container>
            <Title>
                <TitleText>Как расшифровать аукционный лист</TitleText>
                <Link href={{ pathname: `/readAuctionList`, query: { country } }} style={TitleLink}>
                    Как читать аукционный лист
                </Link>
            </Title>
            <AuctionListBody />
        </Container>
    );
};
