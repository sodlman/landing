import React from 'react'
import chartXkcd from 'chart.xkcd'
import { Line } from 'chart.xkcd-react'
import { useEffect, useState } from 'react'
import { getPrice } from 'utils/price'

export default function PriceChart() {
  const [datasets, setDatasets] = useState([])
  const [labels, setLabels] = useState([])

  useEffect(() => {
    const now = Date.now()
    const start = now - 1000 * 60 * 60 * 24 * 730
    const fetchPrices = async () => {
      try {
        const eth = await getPrice(
          '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          start
        )
        const btc = await getPrice(
          '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          start
        )
        const _sets = []

        _sets.push({
          label: 'BTC',
          data: btc.prices.map((p) => p.price).reverse(),
        })
        _sets.push({
          label: 'ETH',
          data: eth.prices.map((p) => p.price).reverse(),
        })
        const length = eth.prices.length
        setLabels(
          eth.prices
            .map((p, idx) => {
              if (!(idx === 0 || idx === length - 1)) {
                return new Array(idx).fill(' ').join('')
              }
              return p.date
            })
            .reverse()
        )
        setDatasets(_sets)
      } catch (error) {}
    }
    fetchPrices()
  }, [])

  if (typeof window === 'undefined') {
    return null
  }
  return (
    <Line
      config={{
        title: '', // optional
        xLabel: 'Time', // optional
        yLabel: '$ Price', // optional
        data: {
          labels,
          datasets,
        },
        options: {
          xTickCount: 2,
          yTickCount: 3,
          showLabels: false,
          legendPosition: chartXkcd.config.positionType.upLeft,
        },
      }}
    />
  )
}
