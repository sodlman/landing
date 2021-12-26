/* eslint-disable react/no-unescaped-entities */
import { Anchor, Box, Heading, Text } from 'grommet'
import dynamic from 'next/dynamic'
import { APP_HOST } from 'utils/constants'

const PieChart = dynamic(() => import('./PieChart'), {
  ssr: false,
})

export default function Tokenecomics({ isMobile }: { isMobile: boolean }) {
  const highlight = 'txt-clipping--subtle-2 txt-clipping'
  const size = isMobile ? '' : 'xlarge'
  return (
    <Box pad="medium">
      <Heading textAlign="center">Tokenecomics</Heading>

      <Box
        direction={isMobile ? 'column' : 'row'}
        align="center"
        justify="between"
        gap={isMobile ? 'medium' : ''}
      >
        <PieChart isMobile={isMobile} />
        <Box width={isMobile ? '100%' : '450px'} gap="small">
          <Text size={size}>Quite plain, right?</Text>
          <Text size={size}>
            All <span className="gradient">$SODL</span>s for all{' '}
            <span>SODLer</span>s.
          </Text>
          <Text size={size}>
            What about <span className={highlight}>the team members</span>?
          </Text>
          <Text size={size} style={{ lineHeight: 1.8 }}>
            We <span className={highlight}>didn't reserve</span> any{' '}
            <span className="gradient">$SODL</span> for ourselves. However, the
            team gain <span className="gradient">$SODL</span> from{' '}
            <Anchor label="votes" href={`${APP_HOST}/vote`} target="_blank" />.
            For more detail, check <Anchor label="here" href="" />.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
