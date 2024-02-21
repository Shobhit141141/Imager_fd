import Images from "@/components/Images";
import Nav from "@/components/Nav";

type Props = {
    params: {
        term: string
    }
}
export function generateMetadata({ params: { term } }: Props) {
    return {
        title: `results for ${term}`
    }
}
export default function SearchImages({ params: { term } }: Props) {
    return (
        <>
            <Nav />
            <Images topic={term} />
        </>

    );
}

