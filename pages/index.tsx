import Banner from 'components/Banner'
import DAO from 'components/DAO'
import FAQ from 'components/FAQ'
import Layout from 'components/Layout'
import Market from 'components/Market'
import RoadMap from 'components/RoadMap'
import SODLToken from 'components/SODLToken'
import Tokenecomics from 'components/Tokenecomics'
import { Box, Heading, Image, ResponsiveContext, Text } from 'grommet'

export default function Home() {
  return (
    <Layout title="Home" mainWidth="100%">
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'

          return (
            <Box direction="column" align="center" width="100%">
              <Banner isMobile={isMobile} />

              <Box width={isMobile ? '100%' : '1000px'}>
                <Market isMobile={isMobile} />

                <SODLToken isMobile={isMobile} />

                <Tokenecomics isMobile={isMobile} />

                <RoadMap isMobile={isMobile} />

                <FAQ />
              </Box>
            </Box>
          )
        }}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}
