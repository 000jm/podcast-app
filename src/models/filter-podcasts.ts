import { podcastModel } from "./models"

export interface podcastTransfer {
    statusCode: number,
    body: podcastModel[]
}
