
import { podcastData } from "../data/podcasts-data.ts"
import { podcastTransfer } from "../models/filter-podcasts.ts"
import { statusCode } from "../utils/status-code.ts"

export const episodesList = async ():Promise<podcastTransfer> => {

    let responseFormat: podcastTransfer = {
            statusCode: 0,
            body: []
        }

    const data = await podcastData()

    responseFormat = {
        statusCode: data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT,
        body: data
    }

    return responseFormat
}
