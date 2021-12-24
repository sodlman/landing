import { Box, Heading, Image, Text } from 'grommet'
import { LinkDown } from 'grommet-icons'
import dynamic from 'next/dynamic'

const PriceChart = dynamic(() => import('./PriceChart'), {
  ssr: false,
})
// import PriceChart from './PriceChart'

export default function Market({ isMobile }: { isMobile: boolean }) {
  const highlight = 'txt-clipping--subtle-2 txt-clipping'
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
        direction={isMobile ? 'column' : 'row'}
        align="center"
        justify="between"
        gap="medium"
        width="100%"
      >
        <Box gap="small">
          <Text size="xlarge">In the past 2 years,</Text>
          <Text size="xlarge">
            ETH grows <span className={highlight}>x30</span>;
          </Text>
          <Text size="xlarge">
            BTC grows <span className={highlight}>x7</span>;
          </Text>
          <Text size="xlarge">
            Did you <span className={highlight}>HODL</span> it, or
            <span className={highlight}>SODL</span> it?
          </Text>
          <Text size="xlarge">In the dead of night,</Text>
          <Text size="xlarge">
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
        <Box>
          <Text size="xlarge">Do you remember Laszlo Hanyecz?</Text>
          <Text size="xlarge">NO?</Text>
          <Text size="xlarge">Let me give you a clue:</Text>
          <Text size="xlarge">Do you remember the guy</Text>
          <Text size="xlarge">
            who purchased{' '}
            <span className={highlight}>2 pizzas for 10,000 BTC</span> in 2010?
          </Text>
          <Text size="xlarge">Did he regret?</Text>
        </Box>
      </Box>

      <Box background="dark-1" pad="medium" gap="medium">
        <Text size="xlarge">
          {`“I've never seen Bitcoin as an investment, and while it's easy to look
          back and say ‘I could have been a millionaire,’ I think it's more
          important to look at the mindset I had during the pizza transaction,
          not being that of acquiring an investment, but of making use of a form
          of currency. If I was looking to hoard coins, I very likely wouldn't
          have been in the right place at the right time.”`}
        </Text>
        <Box direction="row" align="center" justify="end" gap="small">
          <Box width="100px" height="2px" background="white" />
          <Text>Laszlo Hanyecz</Text>
        </Box>
      </Box>

      <Heading level={2} textAlign="center" margin="none">
        So, what are you complaining about?
      </Heading>
      {/* <Text size="xlarge"></Text> */}

      <Text size="xlarge">
        Now, you get a chance to prove you{' '}
        <span className="gradient">SODL</span>
      </Text>
      <Text size="xlarge">
        and maybe<span className={highlight}> recover</span> some of your
        <span className={highlight}>losses</span>
      </Text>
      {/* <Heading level={2} textAlign="center" margin="none">
        
      </Heading> */}

      <LinkDown size="100px" />
    </Box>
  )
}
