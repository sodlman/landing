/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Image, Text } from 'grommet'
import { LinkDown } from 'grommet-icons'
import dynamic from 'next/dynamic'

const PriceChart = dynamic(() => import('./PriceChart'), {
  ssr: false,
})
// import PriceChart from './PriceChart'

export default function Market({ isMobile }: { isMobile: boolean }) {
  const highlight = 'txt-clipping--subtle-2 txt-clipping'
  const size = isMobile ? '' : 'xlarge'
  return (
    <Box
      direction="column"
      align="center"
      pad="medium"
      gap="medium"
      width="100%"
    >
      <Heading textAlign="center">
        About <span style={{ color: 'green' }}>HODL</span> &{' '}
        <span style={{ color: 'red' }}>SODL</span>
      </Heading>

      <Box
        direction={isMobile ? 'column-reverse' : 'row'}
        align={isMobile ? 'start' : 'center'}
        justify="between"
        gap="medium"
        width="100%"
      >
        <Box gap="small">
          <Text size={size}>In the past 2 years,</Text>
          <Text size={size}>
            ETH grows <span className={highlight}>x30</span>;
          </Text>
          <Text size={size}>
            BTC grows <span className={highlight}>x7</span>;
          </Text>
          <Text size={size}>
            Did you <span className={highlight}>HODL</span> it, or
            <span className={highlight}>SODL</span> it?
          </Text>
          <Text size={size}>In the dead of night,</Text>
          <Text size={size}>
            have you ever
            <span className={highlight}>regret</span>it?
          </Text>
        </Box>

        <Box width="400px">
          <PriceChart />
        </Box>
      </Box>

      <Box
        direction={isMobile ? 'column' : 'row'}
        width="100%"
        justify="around"
        gap="large"
        margin={{ vertical: 'medium' }}
      >
        <Box>
          <Image src="/pizza.svg" width="200px" alt="pizza" />
        </Box>
        <Box gap="small">
          <Text size={size}>
            Do you remember <span className={highlight}>Laszlo Hanyecz</span>?
          </Text>
          <Text
            size={size}
            style={{ textDecoration: 'line-through' }}
            color="status-error"
          >
            NO?
          </Text>
          <Text size={size}>What about the guy</Text>
          <Text size={size}>
            who purchased{' '}
            <span className={highlight}>2 pizzas for 10,000 BTC</span> in 2010?
          </Text>
          <Text size={size}>
            Did he <span className={highlight}>regret</span>?
          </Text>
        </Box>
      </Box>

      <Box background="dark-1" pad="medium" gap="medium">
        <Text size={size} style={{ lineHeight: 1.8 }}>
          “I've never seen Bitcoin as an investment, and while it's easy to look
          back and say ‘I could have been a millionaire,’ I think it's{' '}
          <span className={highlight}>
            more important to look at the mindset
          </span>{' '}
          I had during the pizza transaction, not being that of acquiring an
          investment, but of{' '}
          <span className={highlight}>making use of a form of currency</span>.
          If I was looking to hoard coins, I very likely{' '}
          <span className={highlight}>
            wouldn't have been in the right place at the right time
          </span>
          .”
        </Text>
        <Box direction="row" align="center" justify="end" gap="small">
          <Box width="150px" height="2px" background="white" />
          <Text size={size}>Laszlo Hanyecz</Text>
        </Box>
      </Box>

      <Heading level={2} textAlign="center" margin="none">
        So, what are you complaining about?
      </Heading>
      {/* <Text size={size}></Text> */}

      <Text size={size}>
        Now, you get a chance to prove you{' '}
        <span className="gradient">SODL</span>
      </Text>
      <Text size={size}>
        and maybe<span className={highlight}> recover</span> some of your
        <span className={highlight}>losses</span>
      </Text>
      {/* <Heading level={2} textAlign="center" margin="none">
        
      </Heading> */}

      <LinkDown size="100px" />
    </Box>
  )
}
