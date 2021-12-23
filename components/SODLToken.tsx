import { Box, Heading, Image, Text } from 'grommet'

export default function SODLToken({ isMobile }: { isMobile: boolean }) {
  const highlight = 'txt-clipping--subtle txt-clipping'
  return (
    <Box>
      <Heading textAlign="center">
        About <span className="gradient">$SODL</span>
      </Heading>
      <Box
        direction={isMobile ? 'column' : 'row-reverse'}
        align="start"
        justify="around"
        pad={{ vertical: 'large' }}
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
            <Box
              direction="row"
              // border={
              //   isMobile
              //     ? false
              //     : { side: 'right', color: 'yellow', size: 'medium' }
              // }
            >
              <Text style={{ fontSize: 100, lineHeight: '100px' }}>🙁</Text>
              <Image
                src="/equals.svg"
                alt="Equals"
                width="80px"
                style={{ position: 'relative', left: 40 }}
              />
            </Box>
            <Box
              gap="medium"
              flex="grow"
              pad={{ left: 'large', vertical: 'small' }}
              // border={
              //   isMobile
              //     ? { side: 'left', color: 'yellow', size: 'medium' }
              //     : false
              // }
            >
              <Text size="xlarge">
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
              style={{ width: !isMobile ? 110 : 220, height: 4 }}
              background="yellow"
            />
            <Heading margin="none" color="red">
              BUT
            </Heading>
            <Box
              style={{ width: isMobile ? 110 : 220, height: 4 }}
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
              // border={
              //   isMobile
              //     ? false
              //     : { side: 'right', color: 'yellow', size: 'medium' }
              // }
            >
              <Text style={{ fontSize: 100, lineHeight: '100px' }}>✌️</Text>
              <Image
                src="/equals.svg"
                alt="Equals"
                width="80px"
                style={{ position: 'relative', left: 40 }}
              />
            </Box>

            <Box
              gap="medium"
              flex="grow"
              pad={{ left: 'large' }}
              // border={
              //   !isMobile
              //     ? false
              //     : { side: 'left', color: 'yellow', size: 'medium' }
              // }
            >
              <Text size="xlarge">
                It is <span className={highlight}>okay</span>
              </Text>
              <Text size="xlarge">
                I can
                <span className={highlight}>move on</span>
              </Text>
              <Text size="xlarge">
                I love
                <span className={highlight}>decentralized</span>
              </Text>
              <Text size="xlarge">
                I love<span className={highlight}>cryptocurrency</span>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
