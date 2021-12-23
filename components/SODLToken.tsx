import { Box, Heading, Image, Text } from 'grommet'

export default function SODLToken() {
  const highlight = 'txt-clipping--subtle txt-clipping'
  return (
    <Box>
      <Heading textAlign="center">
        About <span className="gradient">$SODL</span>
      </Heading>
      <Box
        direction="row-reverse"
        align="start"
        justify="around"
        pad={{ vertical: 'large' }}
      >
        <Image
          src="/SODL.svg"
          width="300px"
          style={{
            borderRadius: '50%',
          }}
          alt="SODL Token"
        />

        <Box>
          <Box
            direction="row"
            fill
            align="center"
            justify="between"
            gap="medium"
          >
            <Text style={{ fontSize: 100, lineHeight: '100px' }}>🙁</Text>
            <Box
              gap="small"
              flex="grow"
              border={{ side: 'left', color: 'yellow', size: 'medium' }}
              pad={{ left: 'medium' }}
            >
              <Text size="xxlarge">
                I <span className={highlight}>SODL</span>
              </Text>
            </Box>
          </Box>

          <Box direction="row" align="center" gap="medium">
            <Box style={{ width: 60, height: 4 }} background="yellow" />
            <Heading>BUT</Heading>
            <Box style={{ width: 100, height: 4 }} background="yellow" />
          </Box>

          <Box
            direction="row"
            fill
            align="center"
            justify="between"
            gap="medium"
          >
            <Text style={{ fontSize: 100, lineHeight: '100px' }}>✌️</Text>

            <Box
              gap="medium"
              flex="grow"
              border={{ side: 'left', color: 'yellow', size: 'medium' }}
              pad={{ left: 'medium' }}
            >
              <Text size="xxlarge">
                it is <span className={highlight}>okay</span>
              </Text>
              <Text size="xxlarge">
                I can
                <span className={highlight}>move on</span>
              </Text>
              <Text size="xxlarge">
                I love
                <span className={highlight}>decentralized</span>
              </Text>
              <Text size="xxlarge">
                I <span className={highlight}>love</span> cryptocurrency
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
