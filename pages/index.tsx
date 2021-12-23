import DAO from 'components/DAO'
import FAQ from 'components/FAQ'
import Layout from 'components/Layout'
import RoadMap from 'components/RoadMap'
import SODLToken from 'components/SODLToken'
import { Box, Heading, Image, ResponsiveContext, Text } from 'grommet'

export default function Home() {
  return (
    <Layout title="Home" mainWidth={1000}>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'
          const headingStyle = {
            fontSize: isMobile ? 60 : 100,
            lineHeight: 1.2,
            fontWeight: 800,
            color: '#ccc',
          }
          return (
            <Box direction="column" pad={isMobile ? 'medium' : ''}>
              <Box pad={{ vertical: 'medium' }}>
                <Box direction="row" gap="small" align="center">
                  <Text style={headingStyle}>The</Text>
                  <DAO width={isMobile ? 50 : 80} />
                </Box>
                <Text style={headingStyle}>
                  For <span className="gradient">SODL</span>
                  ers
                </Text>
              </Box>

              <SODLToken isMobile={isMobile} />

              <FAQ />

              <RoadMap />
            </Box>
          )
        }}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}
