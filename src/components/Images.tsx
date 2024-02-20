import fetchImage from "@/library/fetchImage";
import type { Imageresult } from "@/models/Images";
import { late } from "zod";
import ImageContainer from "./ImageContainer";
import addBlurredDataUrls from "@/library/getBase64";
async function Images() {

    const url = 'https://api.pexels.com/v1/curated'

    const images: Imageresult | undefined = await fetchImage(url)

    if (!images) return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>

    const blurphotos = await addBlurredDataUrls(images)
    return (
        <section className='px-2 grid gap-2 grid-cols-gallery'>

            {images && blurphotos.map(photo => (
                <ImageContainer photo={photo} key={photo.id} />
            ))}


        </section>
    );
}

export default Images;