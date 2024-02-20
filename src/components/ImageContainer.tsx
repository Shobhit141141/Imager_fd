import type { Photo } from "@/models/Images";
import Image from "next/image";

type Props = {
    photo: Photo
}
function ImageContainer({ photo }: Props) {
    return (
        <div className='h-64 relative bg-slate-500 overflow-hidden rounded-xl group cursor-pointer border-red-400 border-2'>
            <Image
                src={photo.src.large}
                alt={photo.alt}
                fill={true}
                sizes="(min-width: 2860px) calc(9.29vw - 15px), (min-width: 2600px) 10vw, (min-width: 2340px) 11.25vw, (min-width: 2080px) 12.5vw, (min-width: 1820px) 14.17vw, (min-width: 1560px) 16.67vw, (min-width: 1300px) 20vw, (min-width: 1040px) 25vw, (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
                placeholder="blur"
                blurDataURL={photo.blurredDataUrl}
                priority={false}
                className=" object-cover group-hover:opacity-65"
            />
        </div>
    );
}

export default ImageContainer;