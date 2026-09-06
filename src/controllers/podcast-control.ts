
import { IncomingMessage, ServerResponse } from 'http'
import { episodesFilter } from '../services/filter-episodes.ts'
import { episodesList } from '../services/list-episodes.ts'
import { contentType } from '../utils/content-type.ts'
import { podcastTransfer } from '../models/filter-podcasts.ts'

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const listEpisodes:podcastTransfer = await episodesList()

    res.writeHead(listEpisodes.statusCode, {"Content-Type": contentType.JSON})
    res.write(JSON.stringify(listEpisodes.body))
    res.end()
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const filterEpisodes:podcastTransfer = await episodesFilter(req.url)

    res.writeHead(filterEpisodes.statusCode, {"Content-Type": contentType.JSON})
    res.write(JSON.stringify(filterEpisodes))
    res.end()
}
