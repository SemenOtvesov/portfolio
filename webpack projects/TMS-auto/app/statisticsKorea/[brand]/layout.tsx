import RootLayout from '@components/statistics/model/layout';
export default RootLayout;

export async function generateMetadata(props: { params: { brand: string } }) {
    return { title: props.params.brand };
}
