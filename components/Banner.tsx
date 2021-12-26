/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { Box, Button, Text, Image } from 'grommet'
import DAO from './DAO'
import { GRADIENT } from 'utils/constants'

export default function Banner({ isMobile }: { isMobile: boolean }) {
  const headingStyle = {
    fontSize: isMobile ? 50 : 100,
    lineHeight: 1.2,
    fontWeight: 800,
    color: '#ccc',
  }
  return (
    <Box pad={{ vertical: 'medium' }} width="100%">
      <Box pad={{ left: isMobile ? 'small' : '100px' }}>
        <Box direction="row" gap="medium" align="end" pad="small">
          <Text style={{ ...headingStyle, lineHeight: 0.7 }}>The</Text>
          <DAO width={isMobile ? 50 : 80} />
        </Box>
        <Box pad="small">
          <Text style={headingStyle}>
            For <span className="gradient">SODL</span>
            ers
          </Text>
        </Box>
        <Box pad="small">
          <Text style={{ ...headingStyle, fontSize: isMobile ? 30 : 50 }}>
            Don't buy it, claim it
          </Text>
        </Box>
      </Box>
      <Box
        height={isMobile ? '300px' : '400px'}
        align="center"
        justify="center"
        gap="medium"
        style={{ position: 'relative' }}
      >
        <Box
          align="center"
          justify="center"
          width="100%"
          height="100%"
          style={{
            opacity: 0.8,
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <lottie-player src="/banner.json"  background="transparent"  speed="1"  style="width: ${
              isMobile ? 350 : '100%'
            }px; height: ${
                isMobile ? 350 : 400
              }px;"  loop  autoplay></lottie-player>
          `,
            }}
          ></div>
        </Box>
        <Link href="https://app.sodl.xyz" passHref>
          <Box
            round="small"
            background={GRADIENT}
            border={{ side: 'all', size: 'small', color: '#e3e3e3' }}
            pad={{ vertical: 'small', horizontal: 'large' }}
            style={{ zIndex: 1 }}
          >
            <Text size="xlarge" weight="bold">
              Launch dAPP
            </Text>
          </Box>
        </Link>
        {/* <Image src="/textile.svg" width="100%" alt="" /> */}
      </Box>
    </Box>
  )
}
