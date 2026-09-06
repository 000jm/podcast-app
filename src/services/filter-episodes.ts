
import { podcastData } from '../data/podcasts-data.ts'
import { podcastTransfer } from '../models/filter-podcasts.ts'
import { statusCode } from '../utils/status-code.ts'

export const episodesFilter = async (podcastName: string | undefined):Promise<podcastTransfer> => {
    let responseFormat: podcastTransfer = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?podcastName=")[1]
    const data = await podcastData(queryString)

    if(data.length !== 0) {
        responseFormat.statusCode = statusCode.OK
    } else {
        responseFormat.statusCode = statusCode.NO_CONTENT
    }

    responseFormat.body = data

    return responseFormat
}
