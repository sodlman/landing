import axios from 'axios'
import dayjs from 'dayjs'
import { APP_HOST } from './constants'

export function getPrice(address: string, timestamp: number) {
  const url = `${APP_HOST}/api/price?address=${address}&from=${dayjs(
    timestamp
  ).format('YYYY-MM-DD')}`

  return axios
    .get(url)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return {
        prices: [],
        logoUrl: '',
      }
    })
}
