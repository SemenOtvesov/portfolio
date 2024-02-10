import { TurlParams } from '@locTypes/urlPath';

export async function generateMetadataObj(props: { params: TurlParams }) {
    return { title: props.params.model };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
