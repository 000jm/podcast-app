
import * as http from 'http'
import { getFilterEpisodes, getListEpisodes } from './controllers/podcast-control.ts'
import { Routes } from './routes/routes.ts'
import { httpMethods } from './utils/methods.ts'

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    const baseUrl = req.url?.split('?')[0]
    
    if(req.method === httpMethods.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res)
    }

    if(req.method === httpMethods.GET && baseUrl?.startsWith(Routes.EPISODES)) {
        await getFilterEpisodes(req, res)
    }
}
