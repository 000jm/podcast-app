import * as fs from "fs"
import * as path from "path"
import type { podcastModel } from "../models/models.ts"

const pathData = path.join(__dirname, './.json')

export const language = "utf-8"

export const podcastData = async (podcastName?: string): Promise<podcastModel[]> => {
    const rawData = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(rawData)
    
    if (podcastName) {
        jsonFile = jsonFile.filter((podcast: podcastModel) => podcast.podcastName === podcastName)
    }
    
    return jsonFile
}
