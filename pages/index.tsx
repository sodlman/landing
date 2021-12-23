import Banner from 'components/Banner'
import DAO from 'components/DAO'
import FAQ from 'components/FAQ'
import Layout from 'components/Layout'
import Market from 'components/Market'
import RoadMap from 'components/RoadMap'
import SODLToken from 'components/SODLToken'
import { Box, Heading, Image, ResponsiveContext, Text } from 'grommet'

export default function Home() {
  return (
    <Layout title="Home" mainWidth={1000}>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'

          return (
            <Box direction="column" pad={isMobile ? 'medium' : ''}>
              <Banner isMobile={isMobile} />

              <Market isMobile={isMobile} />

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
