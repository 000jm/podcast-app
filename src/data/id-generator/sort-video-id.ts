
import handle from "./podcasts.ts"
import * as fs from "fs"
import * as path from "path"
import { podcastData } from "../podcasts-data.ts"
import { podcastModel } from "../../models/models.ts"

const pathData = path.join(__dirname, './podcasts.json')

export const sortVideoId = async (): Promise<podcastModel[]> => {
    const podcasts = await podcastData()

    const updatedPodcasts = podcasts.map(podcast => ({
        ...podcast,
        videoId: handle()
    }))

    fs.writeFileSync(pathData, JSON.stringify(updatedPodcasts, null, 4), "utf-8")

    return updatedPodcasts
}
