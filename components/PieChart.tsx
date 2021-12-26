import React from 'react'
import chartXkcd from 'chart.xkcd'
import { Pie } from 'chart.xkcd-react'
import { Box } from 'grommet'

export default function PieChart({ isMobile }: { isMobile: boolean }) {
  return (
    <Box width={isMobile ? '100%' : '400px'}>
      <Pie
        config={{
          title: '$SODL DIstribution', // optional
          data: {
            labels: ['SOLDers'],
            datasets: [
              {
                data: [100],
              },
            ],
          },
          options: {
            // optional
            innerRadius: 0.5,
            legendPosition: chartXkcd.config.positionType.upRight,
            backgroundColor: '#00739D',
          },
        }}
      />
    </Box>
  )
}
