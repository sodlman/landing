import { Box, Image, Text, ThemeContext } from 'grommet'
import { useRouter } from 'next/router'
import { GRADIENT } from 'utils/constants'
import DAO from './DAO'

export default function TextLogo() {
  const router = useRouter()
  return (
    <ThemeContext.Consumer>
      {(theme: any) => {
        const color = 'white'

        return (
          <Box
            direction="row"
            align="end"
            gap="xsmall"
            pad="small"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              router.push('/')
            }}
          >
            <Text
              weight={700}
              color={color}
              // className="gradient"
              style={{
                lineHeight: 1,
                fontSize: 42,
                position: 'relative',
                top: 6,
              }}
            >
              sodl
            </Text>
            <DAO />
          </Box>
        )
      }}
    </ThemeContext.Consumer>
  )
}
