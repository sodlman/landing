import { Box, Heading, Image, Text } from 'grommet'

export default function SODLToken({ isMobile }: { isMobile: boolean }) {
  const highlight = 'txt-clipping--subtle txt-clipping'
  const size = isMobile ? '' : 'xlarge'
  return (
    <Box pad="medium">
      <Heading textAlign="center">
        About <span className="gradient">$SODL</span>
      </Heading>
      <Box
        direction={isMobile ? 'column' : 'row-reverse'}
        align="start"
        justify="around"
        pad={{ vertical: 'large' }}
        gap={isMobile ? 'large' : ''}
      >
        <Image
          src="/SODL.svg"
          width={isMobile ? '200px' : '300px'}
          style={{
            borderRadius: '50%',
            margin: '0 auto',
          }}
          alt="SODL Token"
        />

        <Box>
          <Box
            direction={isMobile ? 'column' : 'row'}
            fill
            align={isMobile ? 'start' : 'center'}
            justify="between"
            gap="medium"
          >
            <Box direction="row">
              <Text style={{ fontSize: 100, lineHeight: '100px' }}>🙁</Text>
              <Image
                src="/equals.svg"
                alt="Equals"
                width="80px"
                style={{ position: 'relative', left: 30 }}
              />
            </Box>
            <Box
              gap="medium"
              flex="grow"
              pad={{ left: 'large', vertical: 'small' }}
            >
              <Text size={size}>
                I <span className={highlight}>SODL</span>
              </Text>
            </Box>
          </Box>

          <Box
            direction="row"
            align="center"
            gap="medium"
            margin={{ vertical: isMobile ? 'medium' : '' }}
            pad={{ vertical: 'medium' }}
          >
            <Box
              style={{ width: !isMobile ? 200 : 220, height: 4 }}
              background="yellow"
            />
            <Heading margin="none" color="red">
              BUT
            </Heading>
            <Box
              style={{ width: isMobile ? 40 : 220, height: 4 }}
              background="yellow"
            />
          </Box>

          <Box
            direction={isMobile ? 'column' : 'row'}
            fill
            align={isMobile ? 'start' : 'center'}
            justify="between"
            gap="medium"
          >
            <Box
              direction="row"
              height={isMobile ? '' : '200px'}
              align="center"
            >
              <Text style={{ fontSize: 100, lineHeight: '100px' }}>✌️</Text>
              <Image
                src="/equals.svg"
                alt="Equals"
                width="80px"
                style={{ position: 'relative', left: 30 }}
              />
            </Box>

            <Box gap="medium" flex="grow" pad={{ left: 'large' }}>
              <Text size={size}>
                It is <span className={highlight}>okay</span>
              </Text>
              <Text size={size}>
                I can
                <span className={highlight}>move on</span>
              </Text>
              <Text size={size}>
                I love
                <span className={highlight}>decentralized</span>
              </Text>
              <Text size={size}>
                I love<span className={highlight}>cryptocurrency</span>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box direction="row" justify="center" gap="medium">
        <Image
          width="50px"
          height="50px"
          src="/coinmarketcap.svg"
          alt=""
          style={{ opacity: 0.7 }}
        />
        <Image
          width="50px"
          height="50px"
          src="/coingecko.png"
          alt=""
          style={{ opacity: 0.7 }}
        />
      </Box>
    </Box>
  )
}
