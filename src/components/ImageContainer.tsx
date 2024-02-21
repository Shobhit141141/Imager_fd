import type { Photo } from "@/models/Images";
import Image from "next/image";
import Link from "next/link";
type Props = {
    photo: Photo
}
function ImageContainer({ photo }: Props) {

    const whratio = photo.height / photo.width
    const Imagewidth = Math.ceil(250 * whratio)
    const photospans = Math.ceil(Imagewidth / 10) + 1


    return (
        <div className='w-[250px] justify-self-center cursor-pointer '
            style={{ gridRowEnd: `span ${photospans}` }}
        >
            <Link href={photo.url} target="_blank" className="grid place-content-center">
                <div className=" overflow-hidden group">
                    <Image
                        src={photo.src.large}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        sizes="250px"
                        placeholder="blur"
                        blurDataURL={photo.blurredDataUrl}
                        priority={false}
                        className="group-hover:opacity-65"
                    />
                </div>
            </Link>
        </div>
    );
}

export default ImageContainer;