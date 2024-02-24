import fetchImage from "@/library/fetchImage";
import type { Imageresult } from "@/models/Images";
import addBlurredDataUrls from "@/library/getBase64";
import Footer from "./Footer";
import getPrevNextPages from "@/library/getPrevNextPages";
import ImageContainer from "./ImageContainer";

type Props = {
    topic?: string | undefined,
    page?: string | undefined,
    
}

async function Images({ topic = 'curated', page }: Props) {
    const pageNumber = Math.floor(Math.random() * 10) + 1;

    let url;
    if (topic === 'curated' && page) { // browsing beyond home 
        url = `https://api.pexels.com/v1/curated?page=${page}&per_page=40`;
    } else if (topic === 'curated') { // home 
        url = `https://api.pexels.com/v1/curated?page=1&per_page=40`;
    } else if (!page) { // 1st page of search results 
        url = `https://api.pexels.com/v1/search?query=${topic}&per_page=40`;
    } else { // search result beyond 1st page
        url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}&per_page=40`;
    }

    const images: Imageresult | undefined = await fetchImage(url);

    if (!images || images.per_page === 0) return <h2 className="ms-4 text-2xl font-bold">No Images Found</h2>;

    const blurphotos = await addBlurredDataUrls(images);

    const { prevPage, nextPage } = getPrevNextPages(images);

    const footerProps = { topic, page, nextPage, prevPage };

    return (
        <>
            <section className='px-1 grid grid-cols-gallery place-content-center auto-rows-[7.1px] gap-x-2 w-full'>
                {images && blurphotos.map(photo => (
                    <ImageContainer photo={photo} key={photo.id} />
                ))}
            </section>
            <Footer {...footerProps} />
        </>
    );
}

export default Images;
