import { Image_Photo_Schema } from '@/models/Images'
import { Imageresult } from '@/models/Images'
import { error } from 'console'

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_KEY: string;
            // Add other environment variables if needed
        }
    }
}

export default async function fetchImage(url: string): Promise<Imageresult | undefined> {
    try {
        const res = await fetch(url, {
            headers: {
                Authorization: process.env.API_KEY
            }
        })

        if (!res.ok) {
            throw new Error("Fetch Images Error ! ")
        }

        const imageresult: Imageresult = await res.json()
 

        const parseData = Image_Photo_Schema.parse(imageresult)

        if (parseData.total_results === 0) return undefined

        return parseData

    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e.stack)
        }
    }
}