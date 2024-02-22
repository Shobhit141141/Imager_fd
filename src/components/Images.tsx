import fetchImage from "@/library/fetchImage";
import type { Imageresult } from "@/models/Images";
import { late } from "zod";
import ImageContainer from "./ImageContainer";
import addBlurredDataUrls from "@/library/getBase64";

type Props = {

    topic?: string | undefined

}
async function Images({ topic }: Props) {

    const url = !topic ? 'https://api.pexels.com/v1/curated?page=4&per_page=80' : `https://api.pexels.com/v1/search?query=${topic}`

    const images: Imageresult | undefined = await fetchImage(url)

    if (!images) return <h2 className="ms-4 text-2xl font-bold">No Images Found</h2>

    const blurphotos = await addBlurredDataUrls(images)
    return (
        <section className='px-1 grid grid-cols-gallery place-content-center auto-rows-[7.2px] gap-x-2 w-full'
        
        >

            {images && blurphotos.map(photo => (
                <ImageContainer photo={photo} key={photo.id} />
            ))}


        </section>
    );
}

export default Images;