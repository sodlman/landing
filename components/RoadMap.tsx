import {
  Box,
  Diagram,
  DiagramConnectionAnchor,
  DiagramConnectionType,
  Heading,
  Image,
  Stack,
  Text,
} from 'grommet'
import { Launch } from 'grommet-icons'
import Link from 'next/link'

export default function RoadMap({ isMobile }: { isMobile: boolean }) {
  const anchor: DiagramConnectionAnchor = isMobile ? 'vertical' : 'horizontal'
  const type: DiagramConnectionType = 'direct'

  const connections = [
    {
      id: '1',
      anchor,
      color: 'neutral-1',
      thickness: 'xsmall',
      type,
      toTarget: 'sidechain',
      fromTarget: 'launch',
      round: true,
    },
    {
      id: '3',
      anchor,
      color: 'neutral-1',
      thickness: 'xsmall',
      type,
      toTarget: 'nft',
      fromTarget: 'sidechain',
      round: true,
    },
    {
      id: '3',
      anchor,
      color: 'neutral-1',
      thickness: 'xsmall',
      type,
      toTarget: 'layer2',
      fromTarget: 'nft',
      round: true,
    },
  ]

  return (
    <Box pad={{ vertical: 'small' }}>
      <a id="roadmap">
        <Heading textAlign="center">RoadMap</Heading>
      </a>
      <Stack>
        <Box
          fill
          pad="large"
          direction={isMobile ? 'column' : 'row'}
          justify="between"
          gap={isMobile ? 'large' : ''}
        >
          <Box align="center">
            <Box
              id="launch"
              width="150px"
              height="150px"
              style={{ borderRadius: '50%' }}
              align="center"
              justify="center"
              background="accent-4"
              pad="small"
            >
              <Launch size="large" />
              <Text>Launch</Text>
              <Text size="small">2021-12-31</Text>
            </Box>
          </Box>
          <Box align="center">
            <Box
              id="sidechain"
              width="150px"
              height="150px"
              style={{ borderRadius: '50%' }}
              align="center"
              justify="center"
              background="accent-1"
              pad="small"
            >
              <Image src="/sidechain.svg" width="60px" alt="side chain" />
              <Text>BSC/MATIC...</Text>
              <Text size="small">2022-Q1</Text>
            </Box>
          </Box>
          <Box align="center">
            <Box
              id="nft"
              width="150px"
              height="150px"
              style={{ borderRadius: '50%' }}
              align="center"
              justify="center"
              background="accent-3"
              pad="small"
            >
              <Image src="/nft.png" width="60px" alt="NFT" />
              <Text>NFT</Text>
              <Text size="small">2022-Q2</Text>
            </Box>
          </Box>
          <Box align="center">
            <Box
              id="layer2"
              width="150px"
              height="150px"
              style={{ borderRadius: '50%' }}
              align="center"
              justify="center"
              background="neutral-2"
              pad="small"
            >
              <Image src="/layer2.svg" width="60px" alt="side chain" />
              <Text>Layer 2</Text>
              <Text size="small">2022-Q3</Text>
            </Box>
          </Box>
        </Box>
        <Diagram animation="draw" connections={connections} />
      </Stack>
    </Box>
  )
}
