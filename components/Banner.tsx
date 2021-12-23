import Link from 'next/link'
import { Box, Button, Text, Image } from 'grommet'
import DAO from './DAO'
import { GRADIENT } from 'utils/constants'

export default function Banner({ isMobile }: { isMobile: boolean }) {
  const headingStyle = {
    fontSize: isMobile ? 60 : 100,
    lineHeight: 1.2,
    fontWeight: 800,
    color: '#ccc',
  }
  return (
    <Box pad={{ vertical: 'medium' }}>
      <Box direction="row" gap="small" align="center">
        <Text style={headingStyle}>The</Text>
        <DAO width={isMobile ? 50 : 80} />
      </Box>
      <Text style={headingStyle}>
        For <span className="gradient">SODL</span>
        ers
      </Text>
      <Box height="400px" align="center" justify="center" gap="medium">
        <Link href="https://app.sodl.xyz" passHref>
          <Box
            round="small"
            background={GRADIENT}
            border={{ side: 'all', size: 'small', color: '#e3e3e3' }}
            pad={{ vertical: 'small', horizontal: 'large' }}
          >
            <Text size="xlarge" weight="bold">
              Launch dAPP
            </Text>
          </Box>
        </Link>
        <Box
          align="center"
          justify="center"
          width="100%"
          height={isMobile ? '100px' : '200px'}
          background={'url(/textile.svg)'}
          style={{ backgroundSize: 'contain', opacity: 0.3 }}
        ></Box>
        {/* <Image src="/textile.svg" width="100%" alt="" /> */}
      </Box>
    </Box>
  )
}
