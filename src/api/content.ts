import axios from 'axios'
import { IContent } from '../interfaces/content'
import { Response } from '../interfaces/response'

export interface CommentsResponseData {
  comments? : IContent[]
}

export type RequestComments = Response<CommentsResponseData>

export const apiGetComments = (): Promise<IContent[]> => {
  const comments = axios.get(`${process.env.REACT_APP_API_URL}/comments`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log('error', error)
    })
  return comments
}

export const apiPostComments = (data: IContent): Promise<IContent[]> => {
  const comments = axios.post(`${process.env.REACT_APP_API_URL}/comments`, data)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log('error', error)
    })
  return comments
}
