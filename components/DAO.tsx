import { Box, Image } from 'grommet'
import { GRADIENT } from 'utils/constants'

export default function DAO({ width = 36 }: { width?: number }) {
  return (
    <Box direction="row" align="end">
      <Box
        style={{
          width: width,
          height: width,
          borderTopRightRadius: width / 2,
          borderBottomRightRadius: width / 2,
        }}
        background={GRADIENT}
      />
      <Image src="/A.svg" alt="A" width={`${width}px`} />
      <Box
        style={{
          width: width,
          height: width,
          borderRadius: '50%',
        }}
        background={GRADIENT}
        align="center"
        justify="center"
      />
    </Box>
  )
}
