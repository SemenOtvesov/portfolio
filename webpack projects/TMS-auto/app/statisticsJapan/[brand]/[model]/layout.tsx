import RootLayout from '@components/statistics/model/layout';
import { TurlParams } from '@locTypes/urlPath';
export default RootLayout;

export async function generateMetadata(props: { params: TurlParams }) {
    return { title: props.params.model };
}
