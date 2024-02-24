import Images from "@/components/Images";
import Nav from "@/components/Nav";

type Props = {
    params: {
        params: (string | undefined)[]
    }
}
export function generateMetadata({ params: { params } }: Props) {
    const topic = params?.[0] ?? "curated"
    const page = params?.[1] ?? "1"
    return {
        title: `results for ${topic} - Page ${page}`
    }
}
export default function SearchImages({ params: { params } }: Props) {
    const topic = params?.[0] ?? "curated"
    const page = params?.[1] ?? "1"
    return (
        <>
            <Nav />
            <Images topic={topic} page={page}/>
        </>

    );
}

