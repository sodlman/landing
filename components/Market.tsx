import { Box, Heading, Text } from 'grommet'
import { LinkDown } from 'grommet-icons'
import Streamgraph from './Chart'

export default function Market({ isMobile }: { isMobile: boolean }) {
  const highlight = 'txt-clipping--subtle-2 txt-clipping'
  return (
    <Box
      direction="column"
      align="center"
      pad={{ vertical: 'medium' }}
      gap="medium"
      width="100%"
    >
      <Heading textAlign="center">
        About <span style={{ color: 'green' }}>BULL</span> &{' '}
        <span style={{ color: 'red' }}>BEAR</span>
      </Heading>

      <Box
        direction={isMobile ? 'column' : 'row'}
        align="center"
        justify="between"
        gap="medium"
      >
        <Box gap="small">
          <Text size="large">In the past 2 years,</Text>
          <Text size="large">
            ETH grows <span className={highlight}>x30</span>;
          </Text>
          <Text size="large">
            BTC grows <span className={highlight}>x7</span>;
          </Text>
          <Text size="large">
            Did you <span className={highlight}>HODL</span> it, or
            <span className={highlight}>SODL</span> it?
          </Text>
          <Text size="large">
            In the dead of night, have you ever
            <span className={highlight}>regret</span>it?
          </Text>
        </Box>

        <Box
          width={isMobile ? '300px' : '400px'}
          height={isMobile ? '300px' : '400px'}
        >
          <Streamgraph
            width={isMobile ? 300 : 400}
            height={isMobile ? 300 : 400}
          />
        </Box>
      </Box>

      <Heading level={2} textAlign="center">
        Now, you get a chance to prove you{' '}
        <span className="gradient">SODL</span>
      </Heading>

      <LinkDown size="100px" />
    </Box>
  )
}
