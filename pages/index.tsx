import DAO from 'components/DAO'
import Layout from 'components/Layout'
import SODLToken from 'components/SODLToken'
import { Box, Heading, Image, Text } from 'grommet'

export default function Home() {
  const headingStyle = { fontSize: 100, lineHeight: 1.2, fontWeight: 800 }

  return (
    <Layout title="Home" mainWidth={1000}>
      <Box direction="column">
        <Box pad={{ vertical: 'medium' }}>
          <Box direction="row" gap="small" align="center">
            <Text style={headingStyle}>The</Text>
            <DAO width={80} />
          </Box>
          <Text style={headingStyle}>
            For <span className="gradient">SODL</span>
            ers
          </Text>
        </Box>

        <SODLToken />
      </Box>
    </Layout>
  )
}
