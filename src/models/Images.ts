import { z } from 'zod'


const ImageSchema = z.object({
    page: z.number(),
    per_page: z.number(),
    prev_page: z.string().optional(),
    next_page: z.string().optional(),
    total_results: z.number(),
})

const PhotoSchema = z.object({
    id: z.number(),
    width: z.number(),
    height: z.number(),
    url: z.string(),
    src: z.object({
        large: z.string(),
    }),
    alt: z.string(),
    blurred: z.string().optional(),
    blurredDataUrl : z.string().optional(),
})

export const Image_Photo_Schema = ImageSchema.extend({
    photos: z.array(PhotoSchema)
})

export type Photo = z.infer<typeof PhotoSchema>
export type Imageresult = z.infer<typeof Image_Photo_Schema>