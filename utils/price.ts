import axios from 'axios'
import dayjs from 'dayjs'

export function getPrice(address: string, timestamp: number) {
  const url = `https://app.sodl.xyz/api/price?address=${address}&from=${dayjs(
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
